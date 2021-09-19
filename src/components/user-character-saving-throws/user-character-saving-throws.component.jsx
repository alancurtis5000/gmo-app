import { useDispatch, useSelector } from "react-redux";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import InputNumber from "../input-number/input-number.component";
import TextInput from "../text-input/text-input.component";
import Button from "../button/button.component";
import TextAreaInput from "../text-area-input/text-area-input.component";

const UserCharacterSavingThrows = () => {
  const savingThrows = useSelector(
    (state) => state.userCharacter.data.savingThrows
  );
  const character = useSelector((state) => state.userCharacter.data);
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
            resistances: [...savingThrows.resistances],
          },
        };
      }
    } else if (section === "skill") {
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
            resistances: [...savingThrows.resistances],
          },
        };
      }
    } else {
      let updatedSkills = [...savingThrows.resistances];
      const index = updatedSkills.findIndex(
        (resistance) => resistance.id === updatedSavingThrow.id
      );
      if (index !== -1) {
        updatedSkills.splice(index, 1, updatedSavingThrow);
        update = {
          savingThrows: {
            base: [...savingThrows.base],
            skills: [...savingThrows.skills],
            resistances: [...updatedSkills],
          },
        };
      }
    }
    dispatch(updateUserCharacterLocal(update));
  };

  const renderBase = () => {
    return savingThrows?.base.map((base) => (
      <InputNumber
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
        <InputNumber
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

  const handleAddResistance = () => {
    let updateResistances = [...character.savingThrows.resistances];
    updateResistances.push({
      id: updateResistances.length + 1,
      title: "",
      details: "",
    });
    const update = {
      savingThrows: {
        ...character.savingThrows,
        ...{ resistances: updateResistances },
      },
    };
    dispatch(updateUserCharacterLocal(update));
  };

  const handleDeleteResistance = (resistanceId) => {
    let updatedResistances = [...character.savingThrows.resistances];
    const index = updatedResistances.findIndex(
      (resistance) => resistance.id === resistanceId
    );
    if (index !== -1) {
      updatedResistances.splice(index, 1);
      const update = {
        savingThrows: {
          ...character.savingThrows,
          ...{ resistances: updatedResistances },
        },
      };
      dispatch(updateUserCharacterLocal(update));
    }
  };

  const renderResistances = () => {
    return savingThrows?.resistances.map((resistance, i) => (
      <div key={i}>
        <TextInput
          label={"Title"}
          value={resistance.title}
          onChange={(e) =>
            handleOnChange("resistance", {
              ...resistance,
              title: e.target.value,
            })
          }
        />
        <TextAreaInput
          label={"Details"}
          value={resistance.details}
          onChange={(e) =>
            handleOnChange("resistance", {
              ...resistance,
              details: e.target.value,
            })
          }
        />
        <Button
          text="-"
          onClick={() => handleDeleteResistance(resistance.id)}
        />
      </div>
    ));
  };

  return (
    <div className="user-character-saving-throws">
      <h2>Saving Throws</h2>
      <h3>Base</h3>
      {renderBase()}
      <h3>Skills</h3>
      {renderSkills()}
      <h3>Resistances</h3>
      <Button text="+" onClick={handleAddResistance} />
      {renderResistances()}
    </div>
  );
};

export default UserCharacterSavingThrows;
