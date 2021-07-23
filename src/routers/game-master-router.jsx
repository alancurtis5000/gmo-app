import { Switch, Route } from "react-router-dom";
import GameMasterLandingPage from "../pages/game-master-landing/game-master-landing.component";
import GameMasterCharactersPage from "../pages/game-master-characters/game-master-characters.component";

const GameMasterRouter = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route
        path={`${match.url}/:id`}
        exact={true}
        component={GameMasterLandingPage}
      />
      <Route
        path={`${match.url}/:id/characters`}
        component={GameMasterCharactersPage}
      />
    </Switch>
  );
};

export default GameMasterRouter;
