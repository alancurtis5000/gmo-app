import NumberInput from "../../components/number-input/number-input.component";
import abilities from "../../constants/abilities";
import { connect } from "react-redux";
import { updateCreateCharacter } from "../../redux/create-character/create-character.actions";

const CreateCharacterAbilities = (props) => {
  const { updateCreateCharacter, character } = props;
  const handleOnChange = (abilityScore) => {
    const update = {
      abilityScores: {
        ...character.abilityScores,
        ...abilityScore,
      },
    };
    updateCreateCharacter(update);
  };

  return (
    <div className="create-character-abilities page">
      <h2>Abilities</h2>
      {abilities.map((ability) => {
        const abilityScore = character.abilityScores[ability];
        console.log(abilityScore);
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
  character: state.createCharacter.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateCreateCharacter: (update) => dispatch(updateCreateCharacter(update)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacterAbilities);
