import { useHistory } from "react-router";
const Header = (props) => {
  const { title } = props;
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="header">
      <button onClick={handleBack}>{"<"}</button>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
