import AddIcon from "../../icons/add.icon";
import EditIcon from "../../icons/edit.icon";
import map from "lodash/map";
import CharacterDataTable from "../character-data-table/character-data-table.component";
import CharacterDataInputs from "../character-data-inputs/character-data-inputs.component";

const CharacterSubSection = (props) => {
  const { dataValue, className, dataKey } = props;

  const renderStatItems = () => {
    return map(dataValue, (value, key) => {
      console.log({ dataValue, dataKey });
      switch (key) {
        case "table":
          return (
            <CharacterDataTable
              dataSection={dataKey}
              dataValue={dataValue}
              key={key}
              columns={value.columns}
              rows={value.rows}
            />
          );
        case "inputs":
          return (
            <CharacterDataInputs
              dataSection={dataKey}
              dataValue={dataValue}
              key={key}
            />
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className={`character-subsection card ${className}`}>
      <div className="character-subsection-header">
        <AddIcon height={17} />
        {dataValue.label}
        <EditIcon height={15} />
      </div>
      <div className="character-subsection-content">{renderStatItems()}</div>
    </div>
  );
};

export default CharacterSubSection;
