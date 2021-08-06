import types from "./game.types";
import cloneDeep from "lodash/cloneDeep";
import debounce from "lodash/debounce";
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

export const updateGameCharacter = (character) => (dispatch) => {
  dispatch(updateGameCharacterLocal(character));
  debounceApi(character, dispatch);
};

export const updateGameCharacterApiCall =
  (character) => async (dispatch, getState) => {
    const gameId = getState().game.data.id;
    if (gameId) {
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
    }
  };

const debounceApi = debounce(
  (character, dispatch) => dispatch(updateGameCharacterApiCall(character)),
  600
);

export const updateGameCharacterLocal =
  (character) => async (dispatch, getState) => {
    let players = cloneDeep(getState().game.data.players.items);
    let playerToUpdateIndex = players.findIndex(
      (player) => player.selectedCharacter.id === character.id
    );
    let playerReplace = cloneDeep(players[playerToUpdateIndex]);
    let input = {
      id: character.id,
      abilityScores: character.abilityScores,
      details: character.details,
      savingThrows: character.savingThrows,
      stats: character.stats,
      features: character.features,
      money: character.money,
      items: character.items,
    };
    playerReplace.selectedCharacter = {
      ...playerReplace.selectedCharacter,
      ...input,
    };

    players.splice(playerToUpdateIndex, 1, playerReplace);
    dispatch({
      type: types.UPDATE_GAME_CHARACTER,
      payload: players,
    });
  };
