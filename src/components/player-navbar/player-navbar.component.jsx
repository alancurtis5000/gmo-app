import AccessibilityIcon from "@material-ui/icons/Accessibility";
import CasinoIcon from "@material-ui/icons/Casino";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CreateIcon from "@material-ui/icons/Create";
import AcUnitIcon from "@material-ui/icons/AcUnit";

import Button from "../button/button.component";
import { useHistory, useRouteMatch } from "react-router";

const PlayerNavbar = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const routes = [
    { path: "", title: "Home", icon: <HomeIcon /> },
    { path: "/stats", title: "Stats", icon: <AccessibilityIcon /> },
    { path: "/saving-throws", title: "Saving Throws", icon: <CasinoIcon /> },
    { path: "/items", title: "Items", icon: <ListAltIcon /> },
    { path: "/weapons", title: "Weapons", icon: <BuildIcon /> },
    { path: "/spells", title: "Spells", icon: <AcUnitIcon /> },
    { path: "/details", title: "Details", icon: <CreateIcon /> },
  ];

  console.log({ match });
  const renderButtons = () => {
    return routes.map((route, i) => {
      return (
        <div key={i}>
          <Button
            text={route.title}
            onClick={() => history.push(`${match.url}${route.path}`)}
            icon={route.icon}
          />
        </div>
      );
    });
  };

  return <div className="player-navbar">{renderButtons()}</div>;
};

export default PlayerNavbar;
