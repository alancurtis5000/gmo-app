import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../select/select.component";
import featureRecovery from "../../constants/feature-recovery";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const SelectCharacterFeatureRecovery = (props) => {
  const { disabled, featureId } = props;
  const [options] = useState(featureRecovery);

  const currentValue = useSelector(
    (state) => state.userCharacter.data.features[featureId].recovery
  );
  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);

  const handleSelect = (selectedRecovery) => {
    const featureIndex = character["features"].findIndex(
      (feature) => feature.id === featureId
    );
    const currentFeatureValue = character["features"].find(
      (feature) => feature.id === featureId
    );

    const updatedFeature = {
      ...currentFeatureValue,
      recovery: selectedRecovery,
    };

    let updatedFeatures = character["features"].map((x) => x);
    updatedFeatures.splice(featureIndex, 1, updatedFeature);

    const updatedCharacter = {
      ...character,
      features: updatedFeatures,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  return (
    <div className="select-character-feature-recovery">
      <Select
        options={options}
        handleSelect={handleSelect}
        value={currentValue?.label}
        placeholder="Short Rest"
        disabled={disabled}
      />
    </div>
  );
};

export default SelectCharacterFeatureRecovery;
