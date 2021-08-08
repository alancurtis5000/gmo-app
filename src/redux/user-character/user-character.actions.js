import types from "./user-character.types";
import { API } from "aws-amplify";
import debounce from "lodash/debounce";
import { getCharacterById as getCharacterByIdQuery } from "../../graphql/custom-queries";
import { createCharacter as createCharacterMutation } from "../../graphql/mutations";
import { updateCharacter as updateCharacterMutation } from "../../graphql/custom-mutations";
import { getSelectedCharacterByUserId as getSelectedCharacterByUserIdQuery } from "../../graphql/custom-queries";
import { getUserCharacters } from "../user-characters/user-characters.actions";

export const updateUserCharacterLocal = (update) => (dispatch) => {
  dispatch({
    type: types.UPDATE_USER_CHARACTER,
    payload: update,
  });
};

export const resetUserCharacter = () => (dispatch) => {
  dispatch({
    type: types.RESET_USER_CHARACTER,
  });
};

// get user characters list  //
export const getUserCharacterStart = () => (dispatch) => {
  dispatch({
    type: types.GET_USER_CHARACTER_START,
  });
};

export const getUserCharacterSuccess = (character) => {
  return {
    type: types.GET_USER_CHARACTER_SUCCESS,
    payload: character,
  };
};

export const getUserCharacterFailure = (error) => {
  return {
    type: types.GET_USER_CHARACTER_FAILURE,
    payload: error,
  };
};

export const getUserCharacter = (characterId) => async (dispatch) => {
  dispatch(getUserCharacterStart());
  try {
    const userCharacterData = await API.graphql({
      query: getCharacterByIdQuery,
      variables: {
        id: characterId,
      },
    });
    const character = userCharacterData.data.getCharacter;
    return dispatch(getUserCharacterSuccess(character));
  } catch (error) {
    console.log({ error });
    return dispatch(getUserCharacterFailure(error));
  }
};

// create character //

export const createUserCharacterStart = () => (dispatch) => {
  dispatch({
    type: types.CREATE_USER_CHARACTER_START,
  });
};

export const createUserCharacterSuccess = (game) => {
  return {
    type: types.CREATE_USER_CHARACTER_SUCCESS,
    payload: game,
  };
};

export const createUserCharacterFailure = (error) => {
  return {
    type: types.CREATE_USER_CHARACTER_FAILURE,
    payload: error,
  };
};

export const createUserCharacter = () => async (dispatch, getState) => {
  const characterToCreate = getState()?.userCharacter?.data;
  const userId = getState()?.user?.id;
  dispatch(createUserCharacterStart());
  try {
    // create character with detailsId, abilityScoresId
    await API.graphql({
      query: createCharacterMutation,
      variables: {
        input: {
          characterUserId: userId,
          abilityScores: characterToCreate.abilityScores,
          details: characterToCreate.details,
          savingThrows: characterToCreate.savingThrows,
          stats: characterToCreate.stats,
          features: characterToCreate.features,
          money: characterToCreate.money,
          items: characterToCreate.items,
        },
      },
    });

    return dispatch(createUserCharacterSuccess());
  } catch (error) {
    console.log({ error });
    return dispatch(createUserCharacterFailure(error));
  }
};

// update user character //

export const updateUserCharacterStart = () => (dispatch) => {
  dispatch({
    type: types.UPDATE_USER_CHARACTER_START,
  });
};

export const updateUserCharacterSuccess = (character) => {
  return {
    type: types.UPDATE_USER_CHARACTER_SUCCESS,
    payload: character,
  };
};

export const updateUserCharacterFailure = (error) => {
  return {
    type: types.UPDATE_USER_CHARACTER_FAILURE,
    payload: error,
  };
};

export const updateUserCharacter = (character) => (dispatch) => {
  dispatch(updateUserCharacterLocal(character));
  debounceApi(character, dispatch);
};

export const updateUserCharacterApiCall =
  (character) => async (dispatch, getState) => {
    let characterToUpdate = character
      ? character
      : getState()?.userCharacter?.data;
    dispatch(updateUserCharacterStart());
    try {
      // updateUser character with detailsId, abilityScoresId
      const updateUserCharacterData = await API.graphql({
        query: updateCharacterMutation,
        variables: {
          input: {
            id: characterToUpdate.id,
            abilityScores: characterToUpdate.abilityScores,
            details: characterToUpdate.details,
            savingThrows: characterToUpdate.savingThrows,
            stats: characterToUpdate.stats,
            features: characterToUpdate.features,
            money: characterToUpdate.money,
            items: characterToUpdate.items,
          },
        },
      });
      const updatedCharacter = updateUserCharacterData.data.updateCharacter;
      return dispatch(updateUserCharacterSuccess(updatedCharacter));
    } catch (error) {
      console.log({ error });
      return dispatch(updateUserCharacterFailure(error));
    }
  };

const debounceApi = debounce(
  (character, dispatch) => dispatch(updateUserCharacterApiCall(character)),
  600
);

// get user character from game  //
export const getUserCharacterFromGameStart = () => (dispatch) => {
  dispatch({
    type: types.GET_USER_CHARACTER_START,
  });
};

export const getUserCharacterFromGameSuccess = (character) => {
  return {
    type: types.GET_USER_CHARACTER_SUCCESS,
    payload: character,
  };
};

export const getUserCharacterFromGameFailure = (error) => {
  return {
    type: types.GET_USER_CHARACTER_FAILURE,
    payload: error,
  };
};

export const getUserCharacterFromGame = () => async (dispatch, getState) => {
  dispatch(getUserCharacterFromGameStart());
  const userId = getState().user.id;
  try {
    const result = await API.graphql({
      query: getSelectedCharacterByUserIdQuery,
      variables: {
        id: userId,
      },
    });
    const character = result.data.getUser.selectedCharacter;
    return dispatch(getUserCharacterFromGameSuccess(character));
  } catch (error) {
    console.log(error);
    return dispatch(getUserCharacterFromGameFailure(error));
  }
};

// set userCharacter to incoming character

export const setUserCharacter = (character) => {
  return {
    type: types.SET_USER_CHARACTER,
    payload: character,
  };
};

// save or create new character
// this is used when creating a new character of saving one from user characters
export const saveUserCharacterApiCall = () => async (dispatch, getState) => {
  const userId = getState()?.user?.id;
  const characterToUpdate = getState()?.userCharacter?.data;
  dispatch(updateUserCharacterStart());
  if (!characterToUpdate.id) {
    try {
      // create character with detailsId, abilityScoresId
      await API.graphql({
        query: createCharacterMutation,
        variables: {
          input: {
            characterUserId: userId,
            abilityScores: characterToUpdate.abilityScores,
            details: characterToUpdate.details,
            savingThrows: characterToUpdate.savingThrows,
            stats: characterToUpdate.stats,
            features: characterToUpdate.features,
            money: characterToUpdate.money,
            items: characterToUpdate.items,
          },
        },
      });

      return dispatch(createUserCharacterSuccess());
    } catch (error) {
      console.log({ error });
      return dispatch(createUserCharacterFailure(error));
    }
  } else {
    try {
      // updateUser character with detailsId, abilityScoresId
      const updateUserCharacterData = await API.graphql({
        query: updateCharacterMutation,
        variables: {
          input: {
            id: characterToUpdate.id,
            abilityScores: characterToUpdate.abilityScores,
            details: characterToUpdate.details,
            savingThrows: characterToUpdate.savingThrows,
            stats: characterToUpdate.stats,
            features: characterToUpdate.features,
            money: characterToUpdate.money,
            items: characterToUpdate.items,
          },
        },
      });
      const updatedCharacter = updateUserCharacterData.data.updateCharacter;
      dispatch(getUserCharacters());
      return dispatch(updateUserCharacterSuccess(updatedCharacter));
    } catch (error) {
      console.log({ error });
      return dispatch(updateUserCharacterFailure(error));
    }
  }
};
