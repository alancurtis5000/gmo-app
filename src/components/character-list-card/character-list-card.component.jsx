import Button from "../button/button.component";
import { useHistory } from "react-router-dom";
import { deleteUserCharacter } from "../../redux/user-characters/user-characters.actions";
import { connect } from "react-redux";

const CharacterListCard = (props) => {
  const { character, deleteUserCharacter } = props;
  const history = useHistory();

  const handleSelectCharacter = () => {
    history.push(`/character/${character.id}`);
  };

  const handleDeleteCharacter = (e) => {
    e.stopPropagation();
    console.log("handleDeleteCharacter");
    deleteUserCharacter(character.id);
  };

  return (
    <div style={{ display: "flex" }} onClick={handleSelectCharacter}>
      <div>CharacterListCard</div>
      <div>{character?.details?.name}</div>
      <div>{character?.abilityScores?.strength?.value}</div>
      <Button text="X" onClick={handleDeleteCharacter} />
    </div>
  );
};

const mapsDispatchToProps = (dispatch) => ({
  deleteUserCharacter: (characterId) =>
    dispatch(deleteUserCharacter(characterId)),
});

export default connect(null, mapsDispatchToProps)(CharacterListCard);
