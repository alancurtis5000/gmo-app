/* istanbul ignore file */

import { combineReducers } from "redux";

// import exampleCounterReducer from "./example-counter/example-counter.reducer";
import createCharacterReducer from "./create-character/create-character.reducer";
import gameReducer from "./game/game.reducer";
import userReducer from "./user/user.reducer";
import userCharacterReducer from "./user-character/user-character.reducer";
import userCharactersReducer from "./user-characters/user-characters.reducer";

export default combineReducers({
  //   exampleCounter: exampleCounterReducer,
  createCharacter: createCharacterReducer,
  game: gameReducer,
  user: userReducer,
  userCharacter: userCharacterReducer,
  userCharacters: userCharactersReducer,
});
