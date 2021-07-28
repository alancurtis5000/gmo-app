import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { title } = props;
  const user = useSelector((state) => state.user.name);
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="header">
      <button onClick={handleBack}>{"<"}</button>
      <h3>{title}</h3>
      <h3>{user}</h3>
    </div>
  );
};

export default Header;
