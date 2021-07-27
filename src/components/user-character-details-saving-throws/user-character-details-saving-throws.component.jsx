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
      let updatedBase = [...savingThrows.base];
      const index = updatedBase.findIndex(
        (base) => base.code === updatedSavingThrow.code
      );
      if (index !== -1) {
        updatedBase.splice(index, 1, updatedSavingThrow);
        update = {
          savingThrows: {
            base: [...updatedBase],
            skills: [...savingThrows.skills],
          },
        };
      }
    } else {
      let updatedSkills = [...savingThrows.skills];
      const index = updatedSkills.findIndex(
        (skill) => skill.code === updatedSavingThrow.code
      );
      if (index !== -1) {
        updatedSkills.splice(index, 1, updatedSavingThrow);
        update = {
          savingThrows: {
            base: [...savingThrows.base],
            skills: [...updatedSkills],
          },
        };
      }
    }
    dispatch(updateUserCharacterLocal(update));
  };

  const renderBase = () => {
    return savingThrows?.base.map((base) => (
      <NumberInput
        key={base.code}
        label={base.title}
        value={base.value}
        onChange={(e) =>
          handleOnChange("base", { ...base, value: e.target.value })
        }
      />
    ));
  };

  const renderSkills = () => {
    return savingThrows?.skills.map((skill) => (
      <div key={skill.code}>
        <NumberInput
          label={skill.title}
          value={skill.value}
          onChange={(e) =>
            handleOnChange("skill", { ...skill, value: e.target.value })
          }
        />
        <div>{`(${skill.type})`}</div>
      </div>
    ));
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
