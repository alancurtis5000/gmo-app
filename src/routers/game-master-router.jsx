import { Switch, Route } from "react-router-dom";
import GameMasterLandingPage from "../pages/game-master-landing/game-master-landing.component";
import GameMasterCharactersPage from "../pages/game-master-characters/game-master-characters.component";
import { useRouteMatch } from "react-router";
const GameMasterRouter = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}`}
        exact={true}
        component={GameMasterLandingPage}
      />
      <Route
        path={`${match.url}/characters`}
        component={GameMasterCharactersPage}
      />
    </Switch>
  );
};

export default GameMasterRouter;
