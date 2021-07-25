import TextInput from "../text-input/text-input.component";
import { connect } from "react-redux";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";

const UserCharacterDetails = (props) => {
  const { updateUserCharacterLocal, character } = props;

  const handleOnChange = (detail) => {
    const update = {
      details: {
        ...character.details,
        ...detail,
      },
    };
    updateUserCharacterLocal(update);
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
  updateUserCharacterLocal: (update) =>
    dispatch(updateUserCharacterLocal(update)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCharacterDetails);
