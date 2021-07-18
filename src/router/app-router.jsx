import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/not-found.component";
// import Examples from "../pages/examples/examples.component";
import Home from "../pages/home/home.component";
import JoinGame from "../pages/join-game/join-game.component";
import CreateCharacter from "../pages/create-character/create-character.component";
import CreateGame from "../pages/create-game/create-game.component";
import GameLobby from "../pages/game-lobby/game-lobby.component";

const AppRouter = () => {
  return (
    <div className="app-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/join" component={JoinGame} />
        <Route exact path="/create-character" component={CreateCharacter} />
        <Route exact path="/create-game" component={CreateGame} />
        <Route exact path="/game-lobby/:id" component={GameLobby} />
        {/* <Route exact path="/examples" component={Examples} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default AppRouter;
