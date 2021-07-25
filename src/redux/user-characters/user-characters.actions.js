import types from "./user-characters.types";
import { API } from "aws-amplify";
import { getUserCharactersByUserId as getUserCharactersByUserIdQuery } from "../../graphql/custom-queries";

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
  console.log({ userId });
  try {
    // create character with detailsId, abilityScoresId
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
