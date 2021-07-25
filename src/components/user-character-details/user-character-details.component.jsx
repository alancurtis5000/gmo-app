import TextInput from "../text-input/text-input.component";
import { connect } from "react-redux";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const UserCharacterDetails = (props) => {
  const { updateUserCharacter, character } = props;

  const handleOnChange = (detail) => {
    const update = {
      details: {
        ...character.details,
        ...detail,
      },
    };
    updateUserCharacter(update);
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
  character: state.userCharacter.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserCharacter: (update) => dispatch(updateUserCharacter(update)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCharacterDetails);
