import InputNumber from "../components/input-number/input-number.component";
import InputTextArea from "../components/input-text-area/input-text-area.component";
import InputText from "../components/input-text/input-text.component";

export const mapInputTypeFromData = (
  data,
  rowIndex,
  isEdit,
  handleOnChange
) => {
  const { inputType, label, value, code, isDisabled } = data;

  if (inputType === "number") {
    return (
      <InputNumber
        key={code}
        label={label}
        value={value}
        disabled={isDisabled || !isEdit}
        onChange={(e) =>
          handleOnChange({
            rowIndex,
            code: code,
            value: e.target.value * 1,
          })
        }
      />
    );
  } else if (inputType === "text") {
    return (
      <InputText
        key={code}
        label={label}
        value={value}
        disabled={isDisabled || !isEdit}
        onChange={(e) =>
          handleOnChange({
            rowIndex,
            code: code,
            value: e.target.value,
          })
        }
      />
    );
  } else if (inputType === "textArea") {
    return (
      <InputTextArea
        key={code}
        label={label}
        value={value}
        disabled={isDisabled || !isEdit}
        onChange={(e) =>
          handleOnChange({
            rowIndex,
            code: code,
            value: e.target.value,
          })
        }
      />
    );
  }
};
