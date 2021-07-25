import types from "./create-character.types";
import { API } from "aws-amplify";
import { createCharacter as createCharacterMutation } from "../../graphql/mutations";

export const updateCreateCharacter = (update) => (dispatch) => {
  dispatch({
    type: types.UPDATE_CREATE_CHARACTER,
    payload: update,
  });
};

export const resetCreateCharacter = () => (dispatch) => {
  dispatch({
    type: types.UPDATE_CREATE_CHARACTER,
  });
};

export const createCharacterStart = () => (dispatch) => {
  dispatch({
    type: types.CREATE_CHARACTER_START,
  });
};

export const createCharacterSuccess = (game) => {
  return {
    type: types.CREATE_CHARACTER_SUCCESS,
    payload: game,
  };
};

export const createCharacterFailure = (error) => {
  return {
    type: types.CREATE_CHARACTER_FAILURE,
    payload: error,
  };
};

export const createCharacter = () => async (dispatch, getState) => {
  const characterToCreate = getState()?.createCharacter?.data;
  const userId = getState()?.user?.id;
  dispatch(createCharacterStart());
  try {
    const score = characterToCreate.abilityScores;
    const abilityScores = {
      strength: score.strength.value,
      strengthModifier: score.strength.modifier,
      dexterity: score.dexterity.value,
      dexterityModifier: score.dexterity.modifier,
      constitution: score.constitution.value,
      constitutionModifier: score.constitution.modifier,
      intelligence: score.intelligence.value,
      intelligenceModifier: score.intelligence.modifier,
      wisdom: score.wisdom.value,
      wisdomModifier: score.wisdom.modifier,
      charisma: score.charisma.value,
      charismaModifier: score.charisma.modifier,
    };

    // create character with detailsId, abilityScoresId
    await API.graphql({
      query: createCharacterMutation,
      variables: {
        input: {
          characterUserId: userId,
          abilityScores,
          details: { ...characterToCreate.details },
        },
      },
    });

    return dispatch(createCharacterSuccess());
  } catch (error) {
    console.log({ error });
    return dispatch(createCharacterFailure(error));
  }
};
