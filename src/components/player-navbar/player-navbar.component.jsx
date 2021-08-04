import AccessibilityIcon from "@material-ui/icons/Accessibility";
import CasinoIcon from "@material-ui/icons/Casino";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CreateIcon from "@material-ui/icons/Create";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

const PlayerNavbar = () => {
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

  const renderButtons = () => {
    return routes.map((route, i) => {
      return (
        <NavLink
          className="nav-link"
          to={`${match.url}${route.path}`}
          key={i}
          activeClassName="selected"
          exact
        >
          <div className="text">{route.title}</div>
          <div className="icon">{route.icon}</div>
        </NavLink>
      );
    });
  };

  return <div className="player-navbar">{renderButtons()}</div>;
};

export default PlayerNavbar;
