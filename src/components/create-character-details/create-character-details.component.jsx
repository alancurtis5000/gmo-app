import TextInput from "../text-input/text-input.component";
import { connect } from "react-redux";
import { updateCreateCharacter } from "../../redux/create-character/create-character.actions";

const CreateCharacterDetails = (props) => {
  const { updateCreateCharacter, character } = props;

  const handleOnChange = (detail) => {
    const update = {
      details: {
        ...character.details,
        ...detail,
      },
    };
    updateCreateCharacter(update);
  };

  return (
    <div className="create-character-abilities page">
      <h2>Details</h2>
      <TextInput
        label="Character Name"
        name="name"
        value={character?.details?.name}
        error="don't do it"
        onChange={(e) =>
          handleOnChange({
            name: e.target.value,
          })
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  character: state.createCharacter.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateCreateCharacter: (update) => dispatch(updateCreateCharacter(update)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacterDetails);
