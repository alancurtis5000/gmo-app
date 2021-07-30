import types from "./user-character.types";
import { API } from "aws-amplify";
import { getCharacter as getCharacterQuery } from "../../graphql/queries";
import {
  createCharacter as createCharacterMutation,
  updateCharacter as updateCharacterMutation,
} from "../../graphql/mutations";

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
      query: getCharacterQuery,
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

export const updateUserCharacter = () => async (dispatch, getState) => {
  const characterToUpdate = getState()?.userCharacter?.data;
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
