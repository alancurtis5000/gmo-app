/* istanbul ignore file */

import { combineReducers } from "redux";

// import exampleCounterReducer from "./example-counter/example-counter.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  //   exampleCounter: exampleCounterReducer,
  user: userReducer,
});
