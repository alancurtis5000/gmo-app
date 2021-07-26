import TextInput from "../text-input/text-input.component";
import NumberInput from "../number-input/number-input.component";
import TextAreaInput from "../text-area-input/text-area-input.component";
import SelectAlignment from "../select-alignment/select-alignment.component";
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
        // error="don't do it"
        onChange={(e) =>
          handleOnChange({
            name: e.target.value,
          })
        }
      />
      <TextAreaInput
        label="BackGround"
        name="backGround"
        value={character?.details?.background}
        // error="don't do it"
        onChange={(e) =>
          handleOnChange({
            background: e.target.value,
          })
        }
      />
      <NumberInput
        label="Level"
        name="level"
        value={character?.details?.level}
        onChange={(e) =>
          handleOnChange({
            level: e.target.value,
          })
        }
      />
      <SelectAlignment />
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
