import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/not-found.component";
// import Examples from "../pages/examples/examples.component";
import PreGameRouter from "./pre-game-router";
import SplitRouter from "./split-router";
import TestGameCharacterPage from "../pages/test-game-character/test-game-character.component";
import TestGameMasterPage from "../pages/test-game-master/test-game-master.component";

const AppRouter = () => {
  return (
    <div className="app-content">
      <Switch>
        <Route path="/game/:gameId" component={SplitRouter} />
        {/* Start: test-game-character Start used for testing look of character without logging into game */}
        <Route path="/test-game-character" component={TestGameCharacterPage} />
        <Route path="/test-game-master" component={TestGameMasterPage} />
        {/* End : test-game-character used for testing look of character without logging into game */}
        <Route path="/" component={PreGameRouter} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default AppRouter;
