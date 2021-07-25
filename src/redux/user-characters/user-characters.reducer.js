import types from "./user-characters.types";

export const initialState = {
  data: [],
  isLoaded: false,
  error: "",
};

const userCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_CHARACTERS_START:
      return { ...state, isLoaded: false };
    case types.GET_USER_CHARACTERS_SUCCESS:
      return { ...state, data: [...action.payload], isLoaded: true };
    case types.GET_USER_CHARACTERS_FAILURE:
      return { ...state, data: [], isLoaded: true, error: action.payload };
    case types.DELETE_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.DELETE_USER_CHARACTER_SUCCESS:
      return { ...state, data: [...action.payload], isLoaded: true };
    case types.DELETE_USER_CHARACTER_FAILURE:
      return { ...state, data: [], isLoaded: true, error: action.payload };
    default:
      return state;
  }
};

export default userCharactersReducer;
