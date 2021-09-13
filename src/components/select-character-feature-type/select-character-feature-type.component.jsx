import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../select/select.component";
import featureTypes from "../../constants/feature-types";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const SelectCharacterFeatureType = (props) => {
  const { disabled, featureId } = props;
  const [options] = useState(featureTypes);

  const currentValue = useSelector(
    (state) => state.userCharacter.data.features[featureId].type
  );

  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);

  const handleSelect = (selectedFeatureType) => {
    const featureIndex = character["features"].findIndex(
      (feature) => feature.id === featureId
    );
    const currentFeatureValue = character["features"].find(
      (feature) => feature.id === featureId
    );

    const updatedFeature = {
      ...currentFeatureValue,
      type: selectedFeatureType,
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
    <div className="select-character-feature-type">
      <Select
        options={options}
        handleSelect={handleSelect}
        value={currentValue?.label}
        placeholder="Feature Type"
        disabled={disabled}
      />
    </div>
  );
};

export default SelectCharacterFeatureType;