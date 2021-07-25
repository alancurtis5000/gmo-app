import { useEffect } from "react";
import Button from "../../components/button/button.component";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getUserCharacters } from "../../redux/user-characters/user-characters.actions";

const Characters = (props) => {
  const { userCharacters, getUserCharacters } = props;
  useEffect(() => {
    getUserCharacters();
  }, []);

  let history = useHistory();

  const handleCharacterDetails = (id) => {
    // history.push(`/character/${id}`);
  };

  return (
    <div className="characters page">
      <h1>Characters</h1>
      list of characters
      {JSON.stringify(userCharacters)}
    </div>
  );
};
const mapStateToProps = (state) => ({
  userCharacters: state.userCharacters,
});
const mapDispatchToProps = (dispatch) => ({
  getUserCharacters: () => dispatch(getUserCharacters()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Characters);
