import types from "./game.types";
import { API } from "aws-amplify";
import {
  getGameLobbyById as getGameLobbyByIdQuery,
  getGameByIdForMaster as getGameByIdForMasterQuery,
} from "../../graphql/custom-queries";
import { updateCharacter as updateCharacterMutation } from "../../graphql/custom-mutations";

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

// get gameMaster version of game

export const getGameForMaster = (id) => async (dispatch) => {
  dispatch(getGameStart());
  try {
    const result = await API.graphql({
      query: getGameByIdForMasterQuery,
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

export const updateGameCharacter =
  (character) => async (dispatch, getState) => {
    const gameId = getState().game.data.id;
    dispatch(getGameForMaster(gameId));
    try {
      await API.graphql({
        query: updateCharacterMutation,
        variables: {
          input: {
            id: character.id,
            abilityScores: character.abilityScores,
            details: character.details,
            savingThrows: character.savingThrows,
            stats: character.stats,
            features: character.features,
            money: character.money,
            items: character.items,
          },
        },
      });
      return dispatch(getGameForMaster(gameId));
    } catch (error) {
      console.log({ error });
      return dispatch(getGameFailure(error));
    }
  };
