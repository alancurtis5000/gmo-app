import NumberInput from "../number-input/number-input.component";
import abilities from "../../constants/abilities";
import { connect } from "react-redux";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const UserCharacterAbilities = (props) => {
  const { updateUserCharacter, character } = props;
  const handleOnChange = (abilityScore) => {
    const update = {
      abilityScores: {
        ...character.abilityScores,
        ...abilityScore,
      },
    };
    updateUserCharacter(update);
  };

  return (
    <div className="create-character-abilities page">
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
  updateUserCharacter: (update) => dispatch(updateUserCharacter(update)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCharacterAbilities);
