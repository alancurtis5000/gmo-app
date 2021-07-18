import types from "./user.types";

export const userAdd = (user) => (dispatch) => {
  console.log({ user });
  dispatch({
    type: types.USER_ADD,
    payload: user,
  });
};

export const userReset = () => {
  return {
    type: types.USER_RESET,
  };
};
