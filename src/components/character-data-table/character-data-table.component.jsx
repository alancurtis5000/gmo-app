import forEach from "lodash/forEach";
import { useSelector, useDispatch } from "react-redux";
import TextInput from "../text-input/text-input.component";
import NumberInput from "../number-input/number-input.component";
import TextAreaInput from "../text-area-input/text-area-input.component";
import Button from "../button/button.component";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import { models } from "../../models/models";
import TrashIcon from "../../icons/trash.icon";

const CharacterDataTable = (props) => {
  const { className, onClick, columns, rows, dataSection, dataValue } = props;
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const renderHeader = () => {
    return columns.map((column, i) => (
      <div key={i} className={`header-field-${i}`}>
        {column.label}
      </div>
    ));
  };

  const handleOnChange = (dataToChange) => {
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

  const handleAddRow = () => {
    const section = character[dataSection];
    const subSection = section.find((data) => data.code === dataValue.code);
    const subSectionIndex = section.findIndex(
      (data) => data.code === dataValue.code
    );
    const subSectionRows = subSection.table.rows;

    let updatedRow = models[dataValue.code];

    let updatedSubSectionRows = [...subSectionRows];
    updatedSubSectionRows.push(updatedRow);

    let updateSubSection = {
      ...subSection,
      table: {
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

  const handleRemoveRow = (rowIndex) => {
    const section = character[dataSection];
    const subSection = section.find((data) => data.code === dataValue.code);
    const subSectionIndex = section.findIndex(
      (data) => data.code === dataValue.code
    );
    const subSectionRows = subSection.table.rows;

    let updatedSubSectionRows = [...subSectionRows];
    updatedSubSectionRows.splice(rowIndex, 1);

    let updateSubSection = {
      ...subSection,
      table: {
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

  const getInputType = (data, rowIndex) => {
    if (data.inputType === "number") {
      return (
        <NumberInput
          key={data.code}
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
        <TextInput
          key={data.code}
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
    } else if (data.inputType === "textArea") {
      return (
        <TextAreaInput
          key={data.code}
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

  const renderRows = () => {
    let rowsMapped = [];
    forEach(rows, (row, rowIndex) => {
      let createdRow = [];
      forEach(row, (field, x) => {
        createdRow.push(getInputType(field, rowIndex));
      });
      const rowComp = (
        <div key={rowIndex} className="row" styles={{ display: "flex" }}>
          {createdRow}
          <Button
            icon={<TrashIcon height={20} />}
            onClick={() => handleRemoveRow(rowIndex)}
          />
        </div>
      );
      rowsMapped.push(rowComp);
    });
    return rowsMapped;
  };

  return (
    <div className={`character-data-table ${className}`} onClick={onClick}>
      <Button text="Add" onClick={handleAddRow} />
      <div className="table-header">{renderHeader()}</div>
      <div className="table-rows">{renderRows()}</div>
    </div>
  );
};

export default CharacterDataTable;
