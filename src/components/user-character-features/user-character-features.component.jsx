import TextInput from "../text-input/text-input.component";
import InputNumber from "../input-number/input-number.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import TextAreaInput from "../text-area-input/text-area-input.component";

const UserCharacterFeatures = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const { features } = character;

  const dispatch = useDispatch();

  const handleOnChange = (feature) => {
    let update;
    if ("limited" in feature) {
      update = {
        features: {
          limited: feature.limited,
          constants: features.constants,
        },
      };
    } else if ("constants" in feature) {
      update = {
        features: {
          limited: features.limited,
          constants: feature.constants,
        },
      };
    }

    dispatch(updateUserCharacterLocal(update));
  };

  const handleAddLimitedFeature = () => {
    let updateLimitedFeatures = [...features.limited];
    updateLimitedFeatures.push({
      id: updateLimitedFeatures.length + 1,
      type: "limited",
      title: "",
      max: 0,
      recovery: "",
      used: 0,
      description: "",
    });
    handleOnChange({ limited: updateLimitedFeatures });
  };

  const handleAddContantFeature = () => {
    let updateConstantFeatures = [...features.constants];
    updateConstantFeatures.push({
      id: updateConstantFeatures.length + 1,
      type: "constant",
      title: "",
      description: "",
    });
    handleOnChange({ constants: updateConstantFeatures });
  };

  const handleOnChangeFeature = (updatedFeature) => {
    const featureType =
      updatedFeature.type === "limited" ? "limited" : "constants";
    let update;
    let updatedFeatures = [...features[featureType]];
    const index = updatedFeatures.findIndex(
      (feature) => feature.id === updatedFeature.id
    );
    if (index !== -1) {
      updatedFeatures.splice(index, 1, updatedFeature);
      update = {
        [featureType]: updatedFeatures,
      };
    }

    handleOnChange(update);
  };

  const handleDeleteFeature = (featureToDelete) => {
    const featureType =
      featureToDelete.type === "limited" ? "limited" : "constants";
    let update;
    let updatedFeatures = [...features[featureType]];
    const index = updatedFeatures.findIndex(
      (feature) => feature.id === featureToDelete.id
    );
    if (index !== -1) {
      updatedFeatures.splice(index, 1);
      update = {
        [featureType]: updatedFeatures,
      };
    }

    handleOnChange(update);
  };

  const renderLimitedFeatures = () => {
    return features.limited.map((feature, i) => (
      <div
        style={{ display: "flex", flexDirection: "column" }}
        key={feature.id}
      >
        <h3>{`${i + 1}. ${feature.title}`}</h3>
        <TextInput
          label="Title"
          value={feature.title}
          onChange={(e) =>
            handleOnChangeFeature({ ...feature, title: e.target.value })
          }
        />
        <TextInput
          label="Recovery"
          value={feature.recovery}
          onChange={(e) =>
            handleOnChangeFeature({ ...feature, recovery: e.target.value })
          }
        />
        <TextAreaInput
          label="Description"
          value={feature.description}
          onChange={(e) =>
            handleOnChangeFeature({ ...feature, description: e.target.value })
          }
        />
        <InputNumber
          label="Max"
          value={feature.max}
          onChange={(e) =>
            handleOnChangeFeature({ ...feature, max: e.target.value })
          }
        />
        <InputNumber
          label="Used"
          value={feature.used}
          onChange={(e) =>
            handleOnChangeFeature({ ...feature, used: e.target.value })
          }
        />
        <Button text="Remove" onClick={() => handleDeleteFeature(feature)} />
      </div>
    ));
  };

  const renderConstantFeatures = () => {
    return features.constants.map((feature, i) => (
      <div
        style={{ display: "flex", flexDirection: "column" }}
        key={feature.id}
      >
        <h3>{`${i + 1}. ${feature.title}`}</h3>
        <TextInput
          label="Title"
          value={feature.title}
          onChange={(e) =>
            handleOnChangeFeature({ ...feature, title: e.target.value })
          }
        />
        <TextAreaInput
          label="Description"
          value={feature.description}
          onChange={(e) =>
            handleOnChangeFeature({ ...feature, description: e.target.value })
          }
        />
        <Button text="Remove" onClick={() => handleDeleteFeature(feature)} />
      </div>
    ));
  };

  return (
    <div className="user-character-features">
      <h2>Features</h2>
      <h3>Limited</h3>
      <Button text="+" onClick={handleAddLimitedFeature} />
      {renderLimitedFeatures()}
      <h3>Constant</h3>
      <Button text="+" onClick={handleAddContantFeature} />
      {renderConstantFeatures()}
    </div>
  );
};

export default UserCharacterFeatures;
