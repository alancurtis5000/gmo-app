import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../select/select.component";
import featureTypes from "../../constants/feature-types";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const SelectCharacterFeatureType = (props) => {
  const { disabled, featureId } = props;
  const [selected, setSelected] = useState({});
  const [options] = useState(featureTypes);

  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);

  const currentFeatureTypeValue = useSelector(
    (state) => state.userCharacter.data.features[featureId]
  );

  const handleSelect = (featureType) => {
    const featureIndex = character["features"].findIndex(
      (feature) => feature.id === featureId
    );
    const currentFeatureValue = character["features"].find(
      (feature) => feature.id === featureId
    );

    const updatedFeature = {
      ...currentFeatureValue,
      type: featureType.code,
    };

    let updatedFeatures = character["features"].map((x) => x);
    updatedFeatures.splice(featureIndex, 1, updatedFeature);

    const updatedCharacter = {
      ...character,
      features: updatedFeatures,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  const getCurrentFeatureTypeValue = async () => {
    console.log({ currentFeatureTypeValue });
    const selectedValue = featureTypes.find(
      (featureType) => featureType.code === currentFeatureTypeValue.type
    );
    console.log({ selectedValue });
    setSelected(selectedValue);
  };

  useEffect(() => {
    getCurrentFeatureTypeValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="select-character-feature-type">
      <Select
        options={options}
        handleSelect={handleSelect}
        value={selected?.label}
        placeholder="Feature Type"
        disabled={disabled}
      />
    </div>
  );
};

export default SelectCharacterFeatureType;
