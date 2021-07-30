import TextInput from "../text-input/text-input.component";
import NumberInput from "../number-input/number-input.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";

const UserCharacterStats = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const {
    hitPoints,
    armorClass,
    proficiency,
    initiative,
    deathSaves,
    hitDice,
    speed,
  } = character.stats;
  const dispatch = useDispatch();

  const handleOnChange = (stat) => {
    const update = {
      stats: {
        ...character.stats,
        ...stat,
      },
    };
    dispatch(updateUserCharacterLocal(update));
  };

  const handleAddHitDice = () => {
    let updateHitDice = [...hitDice];
    updateHitDice.push({
      id: updateHitDice.length + 1,
      level: 0,
      die: "",
      used: 0,
    });
    handleOnChange({ hitDice: updateHitDice });
  };

  const handleOnChangeHitDice = (updatedDie) => {
    let update;
    let updatedHitDice = [...hitDice];
    const index = updatedHitDice.findIndex((die) => die.id === updatedDie.id);
    if (index !== -1) {
      updatedHitDice.splice(index, 1, updatedDie);
      update = {
        hitDice: updatedHitDice,
      };
    }
    handleOnChange(update);
  };

  const handleRemoveHitDice = (updatedDie) => {
    let update;
    let updatedHitDice = [...hitDice];
    const index = updatedHitDice.findIndex((die) => die.id === updatedDie.id);
    if (index !== -1) {
      updatedHitDice.splice(index, 1);
      update = {
        hitDice: updatedHitDice,
      };
    }
    handleOnChange(update);
  };

  const renderHitDice = () => {
    return hitDice.map((die) => (
      <div className="hit-dice" key={die.id}>
        <NumberInput
          label="Level"
          value={die.level}
          onChange={(e) =>
            handleOnChangeHitDice({ ...die, level: e.target.value })
          }
        />
        <TextInput
          label="Die"
          value={die.die}
          onChange={(e) =>
            handleOnChangeHitDice({ ...die, die: e.target.value })
          }
        />
        <NumberInput
          label="Used"
          value={die.used}
          onChange={(e) =>
            handleOnChangeHitDice({ ...die, used: e.target.value })
          }
        />
        <Button text="-" onClick={() => handleRemoveHitDice(die)} />
      </div>
    ));
  };

  return (
    <div className="user-character-stats">
      <h2>Stats</h2>
      <h3>Hit Points</h3>
      <NumberInput
        label="Max"
        value={hitPoints.max}
        onChange={(e) =>
          handleOnChange({
            hitPoints: { ...hitPoints, max: e.target.value },
          })
        }
      />
      <NumberInput
        label="Current"
        value={hitPoints.current}
        onChange={(e) =>
          handleOnChange({
            hitPoints: { ...hitPoints, current: e.target.value },
          })
        }
      />
      <NumberInput
        label="Temporary"
        value={hitPoints.temporary}
        onChange={(e) =>
          handleOnChange({
            hitPoints: { ...hitPoints, temporary: e.target.value },
          })
        }
      />
      <h3>Armor Class</h3>
      <NumberInput
        label="Current"
        value={armorClass.value}
        onChange={(e) =>
          handleOnChange({
            armorClass: { ...armorClass, value: e.target.value },
          })
        }
      />
      <NumberInput
        label="Temporary"
        value={armorClass.temporary}
        onChange={(e) =>
          handleOnChange({
            armorClass: { ...armorClass, temporary: e.target.value },
          })
        }
      />
      <h3>Proficiency</h3>
      <NumberInput
        label=""
        value={proficiency.value}
        onChange={(e) =>
          handleOnChange({
            proficiency: { ...proficiency, value: e.target.value },
          })
        }
      />
      <h3>Initiative</h3>
      <NumberInput
        label=""
        value={initiative.value}
        onChange={(e) =>
          handleOnChange({
            initiative: { ...initiative, value: e.target.value },
          })
        }
      />
      <h3>Death Saves</h3>
      <NumberInput
        label=""
        value={deathSaves.successes}
        onChange={(e) =>
          handleOnChange({
            deathSaves: { ...deathSaves, successes: e.target.value },
          })
        }
      />
      <NumberInput
        label=""
        value={deathSaves.failures}
        onChange={(e) =>
          handleOnChange({
            deathSaves: { ...deathSaves, failures: e.target.value },
          })
        }
      />

      <h3>Speed</h3>
      <NumberInput
        label="Base"
        value={speed.base}
        onChange={(e) =>
          handleOnChange({
            speed: { ...speed, base: e.target.value },
          })
        }
      />
      <NumberInput
        label="Encombered"
        value={speed.encombered}
        onChange={(e) =>
          handleOnChange({
            speed: { ...speed, encombered: e.target.value },
          })
        }
      />
      <h3>Hit Dice</h3>
      <Button text="+" onClick={handleAddHitDice} />
      {renderHitDice()}
    </div>
  );
};

export default UserCharacterStats;
