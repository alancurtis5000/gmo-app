import AddIcon from "../../icons/add.icon";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

const PlayerNavbar = () => {
  const match = useRouteMatch();
  const routes = [
    { path: "", title: "Home", icon: <AddIcon /> },
    { path: "/stats", title: "Stats", icon: <AddIcon /> },
    { path: "/saving-throws", title: "Saving Throws", icon: <AddIcon /> },
    { path: "/items", title: "Items", icon: <AddIcon /> },
    { path: "/weapons", title: "Weapons", icon: <AddIcon /> },
    { path: "/spells", title: "Spells", icon: <AddIcon /> },
    { path: "/details", title: "Details", icon: <AddIcon /> },
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
