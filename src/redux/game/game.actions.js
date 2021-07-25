import types from "./game.types";
import { API } from "aws-amplify";
import { getGameLobbyById as getGameLobbyByIdQuery } from "../../graphql/custom-queries";

export const getGameStart = () => (dispatch) => {
  dispatch({
    type: types.GET_GAME_START,
  });
};

export const getGameSuccess = (game) => {
  return {
    type: types.GET_GAME_SUCCESS,
    payload: game,
  };
};

export const getGameFailure = (error) => {
  return {
    type: types.GET_GAME_FAILURE,
    payload: error,
  };
};

export const getGame = (id) => async (dispatch) => {
  dispatch(getGameStart());
  try {
    const result = await API.graphql({
      query: getGameLobbyByIdQuery,
      variables: {
        id: id,
      },
    });
    const game = result.data.getGame;
    return dispatch(getGameSuccess(game));
  } catch (error) {
    return dispatch(getGameFailure(error));
  }
};

// export const getGame = (id) => (dispatch) => {
//   dispatch(getGameStart());
//   // API  call graphql.
//   return getQuote()
//     .then((response) => {
//       dispatch(getGameSuccess(response.data.quotes[0]));
//     })
//     .catch((error) => {
//       dispatch(getGameFailure(error.message));
//     });
// };
