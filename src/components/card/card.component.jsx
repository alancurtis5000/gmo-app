import { mapInputTypeFromData } from "../../utils/mapInputTypeFromData";

const Card = (props) => {
  const { data } = props;
  const { label, inputs } = data;

  const renderInputs = () => {
    console.log("renderInputs");
    return inputs.map((input, index) => {
      return mapInputTypeFromData(input, index);
    });
  };

  return (
    <div className={`card ${props.className}`}>
      <div className="card-header">{label}</div>
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
