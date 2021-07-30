import NumberInput from "../number-input/number-input.component";
import abilities from "../../constants/abilities";
import { connect } from "react-redux";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";

const UserCharacterAbilities = (props) => {
  const { updateUserCharacterLocal, character } = props;
  const handleOnChange = (abilityScore) => {
    const update = {
      abilityScores: {
        ...character.abilityScores,
        ...abilityScore,
      },
    };
    updateUserCharacterLocal(update);
  };

  return (
    <div className="user-character-abilities">
      <h2>Abilities</h2>
      {abilities.map((ability) => {
        const abilityScore = character.abilityScores[ability];
        return (
          <div key={ability}>
            <h3>{ability}</h3>
            <NumberInput
              label="Base"
              name={ability}
              value={abilityScore.value}
              onChange={(e) =>
                handleOnChange({
                  [ability]: {
                    value: e.target.value * 1,
                    modifier: abilityScore.modifier,
                  },
                })
              }
            />
            <NumberInput
              label="Modifier"
              name={ability}
              value={abilityScore.modifier}
              onChange={(e) =>
                handleOnChange({
                  [ability]: {
                    value: abilityScore.value,
                    modifier: e.target.value * 1,
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
)(UserCharacterAbilities);
