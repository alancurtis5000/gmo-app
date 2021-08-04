import { Switch, Route, useRouteMatch } from "react-router-dom";
import PlayerNavbar from "../components/player-navbar/player-navbar.component";

import PlayerLandingPage from "../pages/player-landing/player-landing.component";
// import PlayerCharacterPage from "../pages/player-character/player-character.component";
import PlayerDetailsPage from "../pages/player-details/player-details.component";
import PlayerItemsPage from "../pages/player-items/player-items.component";
import PlayerSavingThrowsPage from "../pages/player-saving-throws/player-saving-throws.component";
import PlayerSpellsPage from "../pages/player-spells/player-spells.component";
import PlayerStatsPage from "../pages/player-stats/player-stats.component";
import PlayerWeaponsPage from "../pages/player-weapons/player-weapons.component";

const PlayerRouter = () => {
  const match = useRouteMatch();
  return (
    <div className="player-router">
      <Switch>
        <Route
          path={`${match.url}`}
          exact={true}
          component={PlayerLandingPage}
        />
        <Route path={`${match.url}/weapons`} component={PlayerWeaponsPage} />
        <Route path={`${match.url}/spells`} component={PlayerSpellsPage} />
        <Route
          path={`${match.url}/saving-throws`}
          component={PlayerSavingThrowsPage}
        />
        <Route path={`${match.url}/items`} component={PlayerItemsPage} />
        <Route path={`${match.url}/details`} component={PlayerDetailsPage} />
        <Route path={`${match.url}/stats`} component={PlayerStatsPage} />
      </Switch>
      <PlayerNavbar />
    </div>
  );
};

export default PlayerRouter;
