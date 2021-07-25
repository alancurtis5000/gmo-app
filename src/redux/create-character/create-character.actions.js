import types from "./create-character.types";
// import { API } from "aws-amplify";
// import { createCharacter as createCharacterQuery } from "../../graphql/custom-queries";

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

// export const createCharacter = (character) => async (dispatch) => {
//   dispatch(createCharacterStart());
//   try {
//     const result = await API.graphql({
//       query: createCharacterQuery,
//       variables: {
//         ...character,
//       },
//     });
//     const game = result.data.createCharacter;
//     return dispatch(createCharacterSuccess(game));
//   } catch (error) {
//     return dispatch(createCharacterFailure(error[0].message));
//   }
// };
