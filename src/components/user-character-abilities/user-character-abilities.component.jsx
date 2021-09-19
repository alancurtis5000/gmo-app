import InputNumber from "../input-number/input-number.component";
import abilities from "../../constants/abilities";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import { useSelector, useDispatch } from "react-redux";

const UserCharacterAbilities = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);

  const handleOnChange = (abilityScore) => {
    const update = {
      abilityScores: {
        ...character.abilityScores,
        ...abilityScore,
      },
    };
    dispatch(updateUserCharacterLocal(update));
  };

  return (
    <div className="user-character-abilities">
      <h2>Abilities</h2>
      {abilities.map((ability) => {
        const abilityScore = character.abilityScores[ability];
        return (
          <div key={ability}>
            <h3>{ability}</h3>
            <InputNumber
              label="Base"
              name={ability}
              value={abilityScore.value * 1}
              onChange={(e) =>
                handleOnChange({
                  [ability]: {
                    ...abilityScore,
                    value: e.target.value * 1,
                  },
                })
              }
            />
            <InputNumber
              label="Modifier"
              name={ability}
              value={abilityScore.modifier * 1}
              onChange={(e) =>
                handleOnChange({
                  [ability]: {
                    ...abilityScore,
                    modifier: e.target.value * 1,
                  },
                })
              }
            />
            <InputNumber
              label="Save"
              name={ability}
              value={abilityScore.save * 1}
              onChange={(e) =>
                handleOnChange({
                  [ability]: {
                    ...abilityScore,
                    save: e.target.value * 1,
                  },
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserCharacterAbilities;
