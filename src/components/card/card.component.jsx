import { useState } from "react";
import { mapInputTypeFromData } from "../../utils/mapInputTypeFromData";
import Button from "../../components/button/button.component";
import { useSelector, useDispatch } from "react-redux";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

// todo left of here alan.
// how do we handle table comps in card?

const Card = (props) => {
  const { data, section } = props;
  const { label, inputs } = data;
  const [isEdit, setIsEdit] = useState(false);
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const handleOnChange = (updatedCharacterData) => {
    const subSectionIndex = character[section].findIndex(
      (subSection) => subSection.code === data.code
    );
    const subSectionCurrentValue = data;
    const currentValue = data.inputs[updatedCharacterData.rowIndex];

    let updatedValue = updatedCharacterData.value;
    if (currentValue.inputType === "number") {
      updatedValue = updatedValue * 1;
    }

    const updatedRow = { ...currentValue, value: updatedValue };

    let updatedSubSectionInputs = [...data.inputs];
    updatedSubSectionInputs.splice(
      updatedCharacterData.rowIndex,
      1,
      updatedRow
    );

    const updatedSubSection = {
      ...subSectionCurrentValue,
      inputs: [...updatedSubSectionInputs],
    };

    let updatedSection = [...character[section]];
    updatedSection.splice(subSectionIndex, 1, updatedSubSection);

    const updatedCharacter = {
      ...character,
      [section]: updatedSection,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  const renderInputs = () => {
    console.log("renderInputs");
    return inputs.map((input, index) => {
      return mapInputTypeFromData(input, index, isEdit, handleOnChange);
    });
  };

  const handleIsEdit = () => {
    console.log({ data });
    console.log("handleIsEdit");
    setIsEdit(true);
  };

  const handleSave = (e) => {
    console.log("handle Save", { e });

    setIsEdit(false);
  };
  const handleCancel = () => {
    console.log("handle Cancel");
    setIsEdit(false);
  };

  const renderActions = () => {
    return (
      <div className="actions">
        {isEdit ? (
          <>
            <Button text="Cancel" onClick={handleCancel} />
            <Button text="Save" onClick={handleSave} />
          </>
        ) : (
          <Button text="Edit" onClick={handleIsEdit} />
        )}
      </div>
    );
  };

  return (
    <div className={`card ${props.className}`}>
      <div className="card-header">
        {label} {renderActions()}
      </div>
      <div className="card-content">{renderInputs()}</div>
    </div>
  );
};

Card.defaultProps = {
  section: "section of userCharacter To update",
  data: {
    code: "defaultCode",
    label: "Default Label",
    inputs: [
      { code: "base", label: "Base", value: 18, inputType: "number" },
      {
        code: "modifier",
        label: "Mod",
        value: "Name of Value",
        inputType: "text",
      },
      {
        code: "save",
        label: "Save",
        value: "this is a lot longer",
        inputType: "textArea",
      },
    ],
  },
};

export default Card;
