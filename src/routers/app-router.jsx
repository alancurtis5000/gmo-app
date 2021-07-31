import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/not-found.component";
// import Examples from "../pages/examples/examples.component";
import PreGameRouter from "./pre-game-router";
import SplitRouter from "./split-router";

const AppRouter = () => {
  return (
    <div className="app-content">
      <Switch>
        <Route path="/game/:gameId" component={SplitRouter} />
        <Route path="/" component={PreGameRouter} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default AppRouter;
