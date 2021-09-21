import forEach from "lodash/forEach";
import { useSelector, useDispatch } from "react-redux";
import Button from "../button/button.component";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import { models } from "../../models/models";
import TrashIcon from "../../icons/trash.icon";
import { mapInputTypeFromData } from "../../utils/mapInputTypeFromData";

const Table = (props) => {
  const { className, onClick, columns, rows, dataSection, dataValue, isEdit } =
    props;
  const character = useSelector((state) => state.userCharacter.data);

  const dispatch = useDispatch();
  console.log({ props });

  const renderHeader = () => {
    let mappedColumns = columns.map((column, i) => (
      <div key={i} className={`header-field-${i}`}>
        {column.label}
      </div>
    ));
    if (dataValue?.table?.options?.canRemoveRows && isEdit) {
      const removeColumn = (
        <div
          key={mappedColumns.length + 1}
          className={`header-field-${"remove-column"}`}
        >
          Remove
        </div>
      );
      mappedColumns.push(removeColumn);
    }
    return mappedColumns;
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

  const getInputType = (data, rowIndex) => {
    return mapInputTypeFromData(data, rowIndex, isEdit, handleOnChange);
  };

  const renderRows = () => {
    let rowsMapped = [];
    forEach(rows, (row, rowIndex) => {
      let createdRow = [];
      forEach(row, (field) => {
        createdRow.push(getInputType(field, rowIndex));
      });
      let rowComp = (
        <div key={rowIndex} className="row" styles={{ display: "flex" }}>
          {createdRow}
        </div>
      );
      // if you can remove rows add removeRow button
      if (dataValue?.table?.options?.canRemoveRows && isEdit) {
        const removeButton = (
          <div key={rowIndex} className="row" styles={{ display: "flex" }}>
            <Button
              icon={<TrashIcon height={20} />}
              onClick={() => handleRemoveRow(rowIndex)}
            />
          </div>
        );
        createdRow.push(removeButton);
      }
      rowsMapped.push(rowComp);
    });
    return rowsMapped;
  };

  return (
    <div className={`character-data-table ${className}`} onClick={onClick}>
      {/* // if you can add rows add AddRow button */}
      {dataValue?.table?.options?.canAddRows && isEdit ? (
        <Button text="Add" onClick={handleAddRow} />
      ) : null}
      <div className="table-header">{renderHeader()}</div>
      <div className="table-rows">{renderRows()}</div>
    </div>
  );
};

// Table.defaultProps = {};

export default Table;
