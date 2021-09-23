import { useState } from "react";
import Button from "../../components/button/button.component";
import { useSelector, useDispatch } from "react-redux";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import Table from "../table/table.component";
import InputMapFromType from "../input-map-from-type/input-map-from-type.component";

const Card = (props) => {
  const { data, section, className } = props;
  const { code, label, inputs, table } = data;
  const [isEdit, setIsEdit] = useState(false);
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const handleOnChange = (updatedCharacterData) => {
    if (section === "") {
      console.warn("no section prop");
      return;
    }

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
    return inputs.map((data, rowIndex) => {
      return (
        <InputMapFromType
          data={data}
          rowIndex={rowIndex}
          isEdit={isEdit}
          handleOnChange={handleOnChange}
        />
      );
    });
  };

  const renderTable = () => {
    return (
      <Table
        dataSection={section}
        dataValue={data}
        key={code}
        columns={table.columns}
        rows={table.rows}
        isEdit={isEdit}
      />
    );
  };

  const renderContent = () => {
    switch (true) {
      case !!inputs:
        return renderInputs();
      case !!table:
        return renderTable();
      default:
        return null;
    }
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
  let classNameValue = className ? className : "";
  return (
    <div className={`card ${classNameValue}`}>
      <div className={`card-header ${classNameValue}`}>
        {label} {renderActions()}
      </div>
      <div className={`card-content ${classNameValue}`}>{renderContent()}</div>
    </div>
  );
};

Card.defaultProps = {
  section: "",
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
