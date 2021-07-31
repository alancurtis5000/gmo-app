import { Switch, Route, useRouteMatch } from "react-router-dom";
import PlayerLandingPage from "../pages/player-landing/player-landing.component";
import PlayerCharacterPage from "../pages/player-character/player-character.component";
const PlayerRouter = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}`} exact={true} component={PlayerLandingPage} />
      <Route path={`${match.url}/character`} component={PlayerCharacterPage} />
    </Switch>
  );
};

export default PlayerRouter;
