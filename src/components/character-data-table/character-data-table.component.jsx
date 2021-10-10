import forEach from "lodash/forEach";
import { useSelector, useDispatch } from "react-redux";
import Button from "../button/button.component";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import { models } from "../../models/models";
import TrashIcon from "../../icons/trash.icon";
import InputSwitch from "../input-switch/InputSwitch.component";

const CharacterDataTable = (props) => {
  const { className, onClick, columns, rows, dataSection, dataValue } = props;
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const renderHeader = () => {
    let mappedColumns = columns.map((column, i) => (
      <div key={i} className={`header-field-${i}`}>
        {column.label}
      </div>
    ));
    if (dataValue?.table?.options?.canRemoveRows) {
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

  const renderRows = () => {
    let rowsMapped = [];
    forEach(rows, (row, rowIndex) => {
      let createdRow = [];
      forEach(row, (field) => {
        createdRow.push(
          <InputSwitch
            key={field.code}
            data={field}
            rowIndex={rowIndex}
            dataValue={dataValue}
            dataSection={dataSection}
            isTable
          />
        );
      });
      let rowComp = (
        <div key={rowIndex} className="row" styles={{ display: "flex" }}>
          {createdRow}
        </div>
      );
      // if you can remove rows add removeRow button
      if (dataValue?.table?.options?.canRemoveRows) {
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
      {dataValue?.table?.options?.canAddRows ? (
        <Button text="Add" onClick={handleAddRow} />
      ) : null}
      <div className="table-header">{renderHeader()}</div>
      <div className="table-rows">{renderRows()}</div>
    </div>
  );
};

export default CharacterDataTable;
