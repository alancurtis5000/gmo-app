import { useEffect } from "react";
import { useRouteMatch } from "react-router";
import { connect } from "react-redux";
import { getUserCharacter } from "../../redux/user-character/user-character.actions";

const Character = (props) => {
  const { getUserCharacter, character } = props;
  // can edit, or create new characters
  const match = useRouteMatch();
  const characterId = match.params.id;
  useEffect(() => {
    if (characterId) {
      getUserCharacter(characterId);
    }
  }, [characterId, getUserCharacter]);

  return (
    <div className="character page">
      <h1>Character</h1>
      character Details
      <div>{character?.details?.name}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  character: state.userCharacter.data,
});

const mapDispatchToProps = (dispatch) => ({
  getUserCharacter: (characterId) => dispatch(getUserCharacter(characterId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);
