import React from "react";
import { Switch, Route } from "react-router-dom";
// import Examples from "../pages/examples/examples.component";
import Home from "../pages/home/home.component";
import JoinGame from "../pages/join-game/join-game.component";
import CreateCharacter from "../pages/create-character/create-character.component";
import CreateGame from "../pages/create-game/create-game.component";
import GameLobby from "../pages/game-lobby/game-lobby.component";
// import Game from "../pages/game/game.component";
import Playground from "../pages/playground/playground.component";

const PreGameRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/join" component={JoinGame} />
      <Route exact path="/create-character" component={CreateCharacter} />
      <Route exact path="/create-game" component={CreateGame} />
      <Route exact path="/playground" component={Playground} />
      <Route exact path="/game-lobby/:id" component={GameLobby} />
    </Switch>
  );
};

export default PreGameRouter;
