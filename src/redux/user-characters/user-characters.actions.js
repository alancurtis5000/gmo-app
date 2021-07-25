import types from "./user-characters.types";
// import { API } from "aws-amplify";
// import { createCharacter as createCharacterMutation } from "../../graphql/mutations";

export const getUserCharactersStart = () => (dispatch) => {
  dispatch({
    type: types.CREATE_CHARACTER_START,
  });
};

export const getUserCharactersSuccess = (game) => {
  return {
    type: types.CREATE_CHARACTER_SUCCESS,
    payload: game,
  };
};

export const getUserCharactersFailure = (error) => {
  return {
    type: types.CREATE_CHARACTER_FAILURE,
    payload: error,
  };
};

export const getUserCharacters = () => async (dispatch, getState) => {
  const characterToCreate = getState()?.createCharacter?.data;
  const userId = getState()?.user?.id;
  dispatch(getUserCharactersStart());
  // try {
  //   const score = characterToCreate.abilityScores;
  //   const abilityScores = {
  //     strength: score.strength,
  //     dexterity: score.dexterity,
  //     constitution: score.constitution,
  //     intelligence: score.intelligence,
  //     wisdom: score.wisdom,
  //     charisma: score.charisma,
  //   };

  //   // create character with detailsId, abilityScoresId
  //   await API.graphql({
  //     query: createCharacterMutation,
  //     variables: {
  //       input: {
  //         characterUserId: userId,
  //         abilityScores,
  //         details: { ...characterToCreate.details },
  //       },
  //     },
  //   });

  //   return dispatch(getUserCharactersSuccess());
  // } catch (error) {
  //   console.log({ error });
  //   return dispatch(getUserCharactersFailure(error));
  // }
};
