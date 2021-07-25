// import { API } from "aws-amplify";
import Button from "../../components/button/button.component";
// import { createCharacter as createCharacterMutation } from "../../graphql/mutations";
import CreateCharacterAbilities from "../../components/create-character-abilities/create-character-abilities.component";
import CreateCharacterDetails from "../../components/create-character-details/create-character-details.component";
import { connect } from "react-redux";
import { createCharacter } from "../../redux/create-character/create-character.actions";

const CreateCharacter = (props) => {
  const { createCharacter } = props;

  async function handleCreateCharacter() {
    createCharacter();
  }

  return (
    <div className="create-character page">
      <h1>Create Character</h1>
      <CreateCharacterDetails />
      <CreateCharacterAbilities />

      <Button text="Create Character" onClick={handleCreateCharacter} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  character: state.createCharacter.data,
});

const mapDispatchToProps = (dispatch) => ({
  createCharacter: () => dispatch(createCharacter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCharacter);
