import { useDispatch, useSelector } from "react-redux";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import NumberInput from "../number-input/number-input.component";

const UserCharacterDetailsSavingThrows = () => {
  const savingThrows = useSelector(
    (state) => state.userCharacter.data.savingThrows
  );
  const dispatch = useDispatch();

  const handleOnChange = (section, updatedSavingThrow) => {
    let update;
    if (section === "base") {
      update = {
        savingThrows: {
          base: { ...savingThrows.base, ...updatedSavingThrow },
          skills: { ...savingThrows.skills },
        },
      };
    } else {
      update = {
        savingThrows: {
          base: { ...savingThrows.base },
          skills: { ...savingThrows.skills, ...updatedSavingThrow },
        },
      };
    }
    dispatch(updateUserCharacterLocal(update));
  };

  const renderBase = () => {
    let base = [];
    for (const [key, value] of Object.entries(savingThrows?.base)) {
      base.push(
        <NumberInput
          key={key}
          label={key}
          value={value}
          onChange={(e) => handleOnChange("base", { [key]: e.target.value })}
        />
      );
    }
    return base;
  };

  const renderSkills = () => {
    let skills = [];
    for (const [key, value] of Object.entries(savingThrows?.skills)) {
      console.log(`${key}: ${value.value}`);
      skills.push(
        <div key={key}>
          <NumberInput
            label={key}
            value={value.value}
            onChange={(e) =>
              handleOnChange("skills", {
                [key]: { value: e.target.value, type: value.type },
              })
            }
          />
          <div>{`(${value.type})`}</div>
        </div>
      );
    }
    return skills;
  };

  return (
    <>
      <h3>Base</h3>
      {renderBase()}
      <h3>Skills</h3>
      {renderSkills()}
    </>
  );
};

export default UserCharacterDetailsSavingThrows;
