import { useSelector, useDispatch } from "react-redux";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import NumberInput from "../number-input/number-input.component";
import TextInput from "../text-input/text-input.component";
import TextAreaInput from "../text-area-input/text-area-input.component";
import SelectCharacterFeatureType from "../select-character-feature-type/select-character-feature-type.component";
import SelectCharacterFeatureRecovery from "../select-character-feature-recovery/select-character-feature-recovery.component";

const CharacterFeaturesCard = (props) => {
  const { dataValue, className } = props;
  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);

  const handleOnChange = (featureToChange) => {
    console.log(featureToChange);
    const featureIndex = character["features"].findIndex(
      (feature) => feature.id === featureToChange.id
    );
    const currentFeatureValue = character["features"].find(
      (feature) => feature.id === featureToChange.id
    );

    const updatedFeature = {
      ...currentFeatureValue,
      [featureToChange.key]: featureToChange.value,
    };

    let updatedFeatures = character["features"].map((x) => x);
    updatedFeatures.splice(featureIndex, 1, updatedFeature);

    const updatedCharacter = {
      ...character,
      features: updatedFeatures,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  const renderLimitedOptions = () => {
    if (dataValue.type.code === "limited") {
      return (
        <>
          <NumberInput
            label={"Max"}
            value={dataValue.max}
            onChange={(e) =>
              handleOnChange({
                id: dataValue.id,
                value: e.target.value,
                key: "max",
              })
            }
          />
          <NumberInput
            label={"Used"}
            value={dataValue.used}
            onChange={(e) =>
              handleOnChange({
                id: dataValue.id,
                value: e.target.value,
                key: "used",
              })
            }
          />
          <SelectCharacterFeatureRecovery featureId={dataValue.id} />
        </>
      );
    }
  };

  return (
    <div className={`character-features-card card ${className}`}>
      <div className="character-features-card-header">{dataValue.label}</div>
      <div className="character-features-card-content">
        <SelectCharacterFeatureType featureId={dataValue.id} />
        <TextInput
          label={"Title"}
          value={dataValue.label}
          onChange={(e) =>
            handleOnChange({
              id: dataValue.id,
              value: e.target.value,
              key: "label",
            })
          }
        />
        <TextAreaInput
          label={"Description"}
          value={dataValue.description}
          onChange={(e) =>
            handleOnChange({
              id: dataValue.id,
              value: e.target.value,
              key: "description",
            })
          }
        />
        {renderLimitedOptions()}
      </div>
    </div>
  );
};

export default CharacterFeaturesCard;
