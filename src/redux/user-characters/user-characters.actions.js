import types from "./user-characters.types";
import { API } from "aws-amplify";
import { getUserCharactersByUserId as getUserCharactersByUserIdQuery } from "../../graphql/custom-queries";
import { deleteCharacter as deleteCharacterMutation } from "../../graphql/custom-mutations";

// get user characters list  //
export const getUserCharactersStart = () => (dispatch) => {
  dispatch({
    type: types.GET_USER_CHARACTERS_START,
  });
};

export const getUserCharactersSuccess = (userCharactersList) => {
  return {
    type: types.GET_USER_CHARACTERS_SUCCESS,
    payload: userCharactersList,
  };
};

export const getUserCharactersFailure = (error) => {
  return {
    type: types.GET_USER_CHARACTERS_FAILURE,
    payload: error,
  };
};

export const getUserCharacters = () => async (dispatch, getState) => {
  const userId = getState()?.user?.id;
  dispatch(getUserCharactersStart());
  try {
    const userCharactersData = await API.graphql({
      query: getUserCharactersByUserIdQuery,
      variables: {
        id: userId,
      },
    });
    const userCharactersList = userCharactersData.data.getUser.characters.items;
    return dispatch(getUserCharactersSuccess(userCharactersList));
  } catch (error) {
    return dispatch(getUserCharactersFailure(error));
  }
};

// delete character from user //

export const deleteUserCharacterStart = () => (dispatch) => {
  dispatch({
    type: types.DELETE_USER_CHARACTER_START,
  });
};

export const deleteUserCharacterSuccess = (userCharactersList) => {
  return {
    type: types.DELETE_USER_CHARACTER_SUCCESS,
    payload: userCharactersList,
  };
};

export const deleteUserCharacterFailure = (error) => {
  return {
    type: types.DELETE_USER_CHARACTER_FAILURE,
    payload: error,
  };
};

export const deleteUserCharacter =
  (characterId) => async (dispatch, getState) => {
    console.log({ characterId });
    dispatch(deleteUserCharacterStart());
    try {
      await API.graphql({
        query: deleteCharacterMutation,
        variables: {
          input: { id: characterId },
        },
      });
      // if delete is successfule get update user Characters list
      return dispatch(getUserCharacters());
    } catch (error) {
      return dispatch(deleteUserCharacterFailure(error));
    }
  };
