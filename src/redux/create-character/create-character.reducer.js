import types from "./create-character.types";

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

const createCharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CREATE_CHARACTER:
      return { ...state, data: { ...state.data, ...action.payload } };
    case types.RESET_CREATE_CHARACTER:
      return { ...initialState };
    case types.CREATE_CHARACTER_START:
      return { ...state, isLoaded: false };
    case types.CREATE_CHARACTER_SUCCESS:
      return { ...state, ...action.payload, isLoaded: true };
    case types.CREATE_CHARACTER_FAILURE:
      return { ...state, data: {}, isLoaded: true, ...action.payload };
    default:
      return state;
  }
};

export default createCharacterReducer;
