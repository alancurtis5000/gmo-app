import types from "./user.types";

export const initialState = {
  id: "",
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_ADD:
      return { ...state, ...action.payload };
    case types.USER_RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
