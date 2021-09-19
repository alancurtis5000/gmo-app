import TextInput from "../text-input/text-input.component";
import InputNumber from "../input-number/input-number.component";
import TextAreaInput from "../text-area-input/text-area-input.component";
import SelectAlignment from "../select-alignment/select-alignment.component";
import { connect } from "react-redux";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import UserCharacterDetailsClass from "../user-character-details-class/user-character-details-class.component";
import Button from "../button/button.component";
import UserCharacterDetailsDescription from "../user-character-details-description/user-character-details-description.component";

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

  const handleAddClass = () => {
    let updateClasses = [...character.details.classes];
    updateClasses.push({ id: updateClasses.length + 1, level: 0, type: "" });
    handleOnChange({ classes: updateClasses });
  };

  const renderClasses = () => {
    return character?.details?.classes.map((aClass, i) => (
      <UserCharacterDetailsClass key={i} aClass={aClass} />
    ));
  };

  return (
    <div className="user-character-details">
      <h2>Details</h2>
      <TextInput
        label="Character Name"
        value={character?.details?.name}
        // error="don't do it"
        onChange={(e) =>
          handleOnChange({
            name: e.target.value,
          })
        }
      />
      <TextAreaInput
        label="Background"
        value={character?.details?.background}
        // error="don't do it"
        onChange={(e) =>
          handleOnChange({
            background: e.target.value,
          })
        }
      />
      <InputNumber
        label="Level"
        value={character?.details?.level}
        onChange={(e) =>
          handleOnChange({
            level: e.target.value,
          })
        }
      />
      <InputNumber
        label="Experience"
        value={character?.details?.experience}
        onChange={(e) =>
          handleOnChange({
            experience: e.target.value,
          })
        }
      />

      <TextInput
        label="Race"
        value={character?.details?.race}
        // error="don't do it"
        onChange={(e) =>
          handleOnChange({
            race: e.target.value,
          })
        }
      />
      <h3>Classes</h3>
      <Button text="+" onClick={handleAddClass} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {renderClasses()}
      </div>
      <SelectAlignment />
      <h3>Description</h3>
      <UserCharacterDetailsDescription />
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
