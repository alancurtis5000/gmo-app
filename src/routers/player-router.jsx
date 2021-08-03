import { Switch, Route, useRouteMatch } from "react-router-dom";
import PlayerLandingPage from "../pages/player-landing/player-landing.component";
import PlayerCharacterPage from "../pages/player-character/player-character.component";
import PlayerNavbar from "../components/player-navbar/player-navbar.component";

const PlayerRouter = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          path={`${match.url}`}
          exact={true}
          component={PlayerLandingPage}
        />
        <Route
          path={`${match.url}/character`}
          component={PlayerCharacterPage}
        />
      </Switch>
      <PlayerNavbar />
    </>
  );
};

export default PlayerRouter;
