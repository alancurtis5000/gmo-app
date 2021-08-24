import { Switch, Route, useRouteMatch } from "react-router-dom";
import PlayerNavbar from "../components/player-navbar/player-navbar.component";

import PlayerLandingPage from "../pages/player-landing/player-landing.component";
// import PlayerCharacterPage from "../pages/player-character/player-character.component";
import PlayerDetailsPage from "../pages/player-details/player-details.component";
import PlayerItemsPage from "../pages/player-items/player-items.component";
import PlayerSavingThrowsPage from "../pages/player-saving-throws/player-saving-throws.component";
import PlayerSpellsPage from "../pages/player-spells/player-spells.component";
import PlayerStatsPage from "../pages/player-stats/player-stats.component";
import PlayerFeaturesPage from "../pages/player-features/player-features.component";
import PlayerMoneyPage from "../pages/player-money/player-money.component";
import PlayerResistancesPage from "../pages/player-resistances/player-resistances.component";
import PlayerWeaponsPage from "../pages/player-weapons/player-weapons.component";
import Header from "../components/header/header.component";

const PlayerRouter = () => {
  const match = useRouteMatch();
  return (
    <div className="player-router">
      <Header title="Player" />
      <div className="content">
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
          <Route
            path={`${match.url}/features`}
            component={PlayerFeaturesPage}
          />
          <Route path={`${match.url}/money`} component={PlayerMoneyPage} />
          <Route
            path={`${match.url}/resistances`}
            component={PlayerResistancesPage}
          />
        </Switch>
      </div>
      <PlayerNavbar />
    </div>
  );
};

export default PlayerRouter;
