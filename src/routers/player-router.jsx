import { Switch, Route } from "react-router-dom";
import PlayerLandingPage from "../pages/player-landing/player-landing.component";
import PlayerCharacterPage from "../pages/player-character/player-character.component";

const PlayerRouter = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route
        path={`${match.url}/:id`}
        exact={true}
        component={PlayerLandingPage}
      />
      <Route
        path={`${match.url}/:id/character`}
        component={PlayerCharacterPage}
      />
    </Switch>
  );
};

export default PlayerRouter;
