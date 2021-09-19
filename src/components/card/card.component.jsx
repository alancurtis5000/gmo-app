import { useState } from "react";
import { mapInputTypeFromData } from "../../utils/mapInputTypeFromData";
import Button from "../../components/button/button.component";

// todo left of here alan.
// how do we handle table comps in card?

const Card = (props) => {
  const { data } = props;
  const { label, inputs } = data;
  const [isEdit, setIsEdit] = useState(false);

  const renderInputs = () => {
    console.log("renderInputs");
    return inputs.map((input, index) => {
      return mapInputTypeFromData(input, index, isEdit);
    });
  };

  const handleIsEdit = () => {
    console.log("handleIsEdit");
    setIsEdit(true);
  };

  const handleSave = () => {
    console.log("handle Save");
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
            <Button text="Save" onClick={handleSave} />
            <Button text="Cancel" onClick={handleCancel} />
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
