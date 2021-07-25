import types from "./user-character.types";
import { API } from "aws-amplify";
import { getCharacterById as getCharacterByIdQuery } from "../../graphql/custom-queries";

export const updateUserCharacter = (update) => (dispatch) => {
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
