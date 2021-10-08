import forEach from "lodash/forEach";
import { useSelector, useDispatch } from "react-redux";
import InputText from "../input-text/input-text.component";
import InputNumber from "../input-number/input-number.component";
import InputTextArea from "../input-text-area/input-text-area.component";
import Button from "../button/button.component";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const CharacterDataInputs = (props) => {
  const { className, dataValue, dataSection } = props;
  const { inputs } = dataValue;
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const handleOnChange = (dataToChange) => {
    console.log({ dataToChange, dataSection, dataValue });
    const section = character[dataSection];
    const subSection = section.find((data) => data.code === dataValue.code);
    console.log({ subSection });
    // todo left off here!!!
    // get handle on change to update redux character : like table comp

    // const subSectionIndex = section.findIndex(
    //   (data) => data.code === dataValue.code
    // );
    // const subSectionRows = subSection.table.rows;
    // let currentField = subSectionRows[dataToChange.rowIndex].find(
    //   (field) => field.code === dataToChange.code
    // );
    // let currentFieldIndex = subSectionRows[dataToChange.rowIndex].findIndex(
    //   (field) => field.code === dataToChange.code
    // );

    // const updatedField = {
    //   ...currentField,
    //   value: dataToChange.value,
    // };

    // let updatedRow = [...subSectionRows[dataToChange.rowIndex]];
    // updatedRow.splice(currentFieldIndex, 1, updatedField);

    // let updatedSubSectionRows = [...subSectionRows];
    // updatedSubSectionRows.splice(dataToChange.rowIndex, 1, updatedRow);

    // console.log({
    //   section,
    //   subSection,
    //   // subSectionIndex,
    //   updatedField,
    //   currentFieldIndex,
    //   subSectionRows,
    //   updatedRow,
    //   updatedSubSectionRows,
    // });

    // let updateSubSection = {
    //   ...subSection,
    //   table: {
    //     options: subSection.table.options,
    //     columns: subSection.table.columns,
    //     rows: updatedSubSectionRows,
    //   },
    // };

    // let updatedCharacter = {
    //   ...character,
    // };
    // updatedCharacter[dataSection][subSectionIndex] = updateSubSection;

    // dispatch(updateUserCharacter(updatedCharacter));
  };

  const getInputType = (data, rowIndex) => {
    if (data.inputType === "number") {
      return (
        <InputNumber
          key={data.code}
          label={data.label}
          value={data.value}
          onChange={(e) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: e.target.value * 1,
            })
          }
        />
      );
    } else if (data.inputType === "text") {
      return (
        <InputText
          key={data.code}
          label={data.label}
          value={data.value}
          disabled={data.disabled}
          onChange={(e) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: e.target.value,
            })
          }
        />
      );
    } else if (data.inputType === "textArea") {
      return (
        <InputTextArea
          key={data.code}
          label={data.label}
          value={data.value}
          onChange={(e) =>
            handleOnChange({
              rowIndex,
              code: data.code,
              value: e.target.value,
            })
          }
        />
      );
    }
  };

  const renderInputs = () => {
    let inputsMapped = [];
    forEach(inputs, (input, inputIndex) => {
      inputsMapped.push(getInputType(input, inputIndex));
    });
    return inputsMapped;
  };

  return (
    <div className={`character-data-inputs ${className}`}>
      <div className="inputs">{renderInputs()}</div>
      <div>Hello</div>
    </div>
  );
};

export default CharacterDataInputs;
