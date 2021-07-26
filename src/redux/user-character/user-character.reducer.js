import types from "./user-character.types";
import { initialState } from "./user-character-initial-state";

const userCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_CHARACTER:
      return { ...state, data: { ...state.data, ...action.payload } };
    case types.RESET_USER_CHARACTER:
      return { ...initialState };
    // GET
    case types.GET_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.GET_USER_CHARACTER_SUCCESS:
      return { ...state, data: { ...action.payload }, isLoaded: true };
    case types.GET_USER_CHARACTER_FAILURE:
      return { ...state, data: {}, isLoaded: true, error: action.payload };
    // CREATE
    case types.CREATE_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.CREATE_USER_CHARACTER_SUCCESS:
      return { ...initialState, isLoaded: true };
    case types.CREATE_USER_CHARACTER_FAILURE:
      return { ...state, isLoaded: true, error: action.payload };
    // UPDATE
    case types.UPDATE_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.UPDATE_USER_CHARACTER_SUCCESS:
      return { ...state, data: { ...action.payload }, isLoaded: true };
    case types.UPDATE_USER_CHARACTER_FAILURE:
      return { ...state, isLoaded: true, error: action.payload };
    default:
      return state;
  }
};

export default userCharactersReducer;
