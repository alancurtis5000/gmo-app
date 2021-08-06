import types from "./game.types";

export const initialState = {
  data: {
    id: "",
    name: "",
    players: { items: [] },
    master: {},
    hasStarted: false,
  },
  isLoaded: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_GAME_START:
      return { ...state, isLoaded: false };
    case types.GET_GAME_SUCCESS:
      return { ...state, data: { ...action.payload }, isLoaded: true };
    case types.GET_GAME_FAILURE:
      return { ...state, data: {}, isLoaded: true, ...action.payload };
    case types.UPDATE_GAME_CHARACTER:
      return {
        ...state,
        data: { ...state.data, players: { items: action.payload } },
      };
    default:
      return state;
  }
};

export default userReducer;
