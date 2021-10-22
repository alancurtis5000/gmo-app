import InputText from "../input-text/input-text.component";
import InputNumber from "../input-number/input-number.component";
import InputTextArea from "../input-text-area/input-text-area.component";
import Checkbox from "../checkbox/checkbox.component";
import Select from "../select/select.component";
import constants from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const InputSwitch = (props) => {
  const { data, rowIndex, dataValue, dataSection, isTable, disabled } = props;
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const handleOnChangeTable = (dataToChange) => {
    console.log({ dataToChange, dataSection, dataValue });
    const section = character[dataSection];
    const subSection = section.find((data) => data.code === dataValue.code);
    const subSectionIndex = section.findIndex(
      (data) => data.code === dataValue.code
    );
    const subSectionRows = subSection.table.rows;
    let currentField = subSectionRows[dataToChange.rowIndex].find(
      (field) => field.code === dataToChange.code
    );
    let currentFieldIndex = subSectionRows[dataToChange.rowIndex].findIndex(
      (field) => field.code === dataToChange.code
    );

    const updatedField = {
      ...currentField,
      value: dataToChange.value,
    };

    let updatedRow = [...subSectionRows[dataToChange.rowIndex]];
    updatedRow.splice(currentFieldIndex, 1, updatedField);

    let updatedSubSectionRows = [...subSectionRows];
    updatedSubSectionRows.splice(dataToChange.rowIndex, 1, updatedRow);

    let updateSubSection = {
      ...subSection,
      table: {
        options: subSection.table.options,
        columns: subSection.table.columns,
        rows: updatedSubSectionRows,
      },
    };

    let updatedCharacter = {
      ...character,
    };
    updatedCharacter[dataSection][subSectionIndex] = updateSubSection;

    dispatch(updateUserCharacter(updatedCharacter));
  };

  const handleOnChangeInput = (dataToChange) => {
    console.log({ data, rowIndex, dataValue, dataSection });
    const section = character[dataSection];
    const subSection = section.find((data) => data.code === dataValue.code);

    const subSectionIndex = section.findIndex(
      (data) => data.code === dataValue.code
    );
    const subSectionInputs = subSection.inputs;
    let currentField = subSectionInputs.find(
      (field) => field.code === dataToChange.code
    );
    let currentFieldIndex = subSectionInputs.findIndex(
      (field) => field.code === dataToChange.code
    );

    const updatedField = {
      ...currentField,
      value: dataToChange.value,
    };

    let updatedInputs = [...subSectionInputs];
    updatedInputs.splice(currentFieldIndex, 1, updatedField);
    console.log({ updatedInputs });

    let updateSubSection = {
      ...subSection,
      inputs: [...updatedInputs],
    };

    let updatedCharacter = {
      ...character,
    };
    updatedCharacter[dataSection][subSectionIndex] = updateSubSection;

    dispatch(updateUserCharacter(updatedCharacter));
  };
  const handleOnChange = (dataToChange) => {
    console.log({ dataToChange });
    switch (isTable) {
      case true:
        handleOnChangeTable(dataToChange);
        break;
      default:
        handleOnChangeInput(dataToChange);
        break;
    }
  };

  switch (data?.inputType) {
    case "number":
      return (
        <InputNumber
          key={data.code}
          label={data.label}
          value={data.value}
          disabled={disabled}
          onChange={(e) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: e.target.value * 1,
            })
          }
        />
      );
    case "text":
      return (
        <InputText
          key={data.code}
          label={data.label}
          value={data.value}
          disabled={disabled}
          onChange={(e) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: e.target.value,
            })
          }
        />
      );
    case "textArea":
      return (
        <InputTextArea
          key={data.code}
          label={data.label}
          value={data.value}
          disabled={disabled}
          onChange={(e) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: e.target.value,
            })
          }
        />
      );
    case "checkbox":
      return (
        <Checkbox
          key={data.code}
          label={data.label}
          checked={data.value}
          disabled={disabled}
          onChange={(e) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: e.target.checked,
            })
          }
        />
      );
    case "select":
      return (
        <Select
          label={data.label}
          options={constants[data.code]}
          disabled={disabled}
          onChange={(selectedValue) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: selectedValue,
            })
          }
          value={data.value}
          placeholder="Alignment"
        />
      );

    default:
      return null;
  }
};

export default InputSwitch;
