import { useSelector, useDispatch } from "react-redux";
import AddIcon from "../../icons/add.icon";
import EditIcon from "../../icons/edit.icon";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import InputNumber from "../input-number/input-number.component";
import InputText from "../input-text/input-text.component";
import InputTextArea from "../input-text-area/input-text-area.component";
import map from "lodash/map";
import CharacterDataTable from "../character-data-table/character-data-table.component";
import CharacterDataInputs from "../character-data-inputs/character-data-inputs.component";

const CharacterSubSection = (props) => {
  const { dataValue, className, dataKey } = props;
  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);

  const handleOnChange = (statToChange) => {
    console.log(statToChange);
    const statIndex = character[dataKey].findIndex(
      (stat) => stat.code === statToChange.code
    );
    const currentStatValue = character[dataKey].find(
      (stat) => stat.code === statToChange.code
    );

    let updatedValue = statToChange.value.value;
    if (currentStatValue.value.inputType === "number") {
      updatedValue = updatedValue * 1;
    }

    const updatedStat = {
      ...currentStatValue,
      [statToChange.value.key]: {
        ...currentStatValue[statToChange.value.key],
        value: updatedValue,
      },
    };

    let updatedStats = character[dataKey].map((x) => x);
    updatedStats.splice(statIndex, 1, updatedStat);

    const updatedCharacter = {
      ...character,
      [dataKey]: updatedStats,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  // Todo: Alan Clean up how this render happens. maybe switch statement.
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
