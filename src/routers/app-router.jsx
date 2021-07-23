import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/not-found.component";
// import Examples from "../pages/examples/examples.component";
import PreGameRouter from "./pre-game-router";
import GameMasterRouter from "./game-master-router";
import PlayerRouter from "./player-router";

const AppRouter = () => {
  const isGameMaster = false;
  return (
    <div className="app-content">
      <Switch>
        <Route
          path="/game"
          component={isGameMaster ? GameMasterRouter : PlayerRouter}
        />
        <Route path="/" component={PreGameRouter} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default AppRouter;
