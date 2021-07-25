import types from "./user-character.types";

export const initialState = {
  data: {
    details: {
      name: "",
    },
    abilityScores: {
      strength: { value: 0, modifier: 0 },
      dexterity: { value: 0, modifier: 0 },
      constitution: { value: 0, modifier: 0 },
      intelligence: { value: 0, modifier: 0 },
      wisdom: { value: 0, modifier: 0 },
      charisma: { value: 0, modifier: 0 },
    },
  },
  isLoaded: false,
  error: "",
};

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
      return { ...state, data: {}, isLoaded: true, error: [...action.payload] };
    // CREATE
    case types.CREATE_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.CREATE_CHARACTER_SUCCESS:
      return { ...initialState, isLoaded: true };
    case types.CREATE_CHARACTER_FAILURE:
      return { ...state, isLoaded: true, error: [...action.payload] };
    // UPDATE
    case types.UPDATE_USER_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.UPDATE_USER_CHARACTER_SUCCESS:
      return { ...state, data: { ...action.payload }, isLoaded: true };
    case types.UPDATE_USER_CHARACTER_FAILURE:
      return { ...state, isLoaded: true, error: [...action.payload] };
    default:
      return state;
  }
};

export default userCharactersReducer;
