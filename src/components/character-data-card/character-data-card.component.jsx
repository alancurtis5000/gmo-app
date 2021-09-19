import { useSelector, useDispatch } from "react-redux";
import AddIcon from "../../icons/add.icon";
import EditIcon from "../../icons/edit.icon";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import InputNumber from "../input-number/input-number.component";
import InputText from "../input-text/input-text.component";
import TextAreaInput from "../text-area-input/text-area-input.component";
import map from "lodash/map";
import CharacterDataTable from "../character-data-table/character-data-table.component";

const CharacterDataCard = (props) => {
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
      if (
        key === "label" ||
        key === "code" ||
        key === "type" ||
        key === "ability"
      ) {
        return;
      }
      if (key === "table") {
        return (
          <CharacterDataTable
            dataSection={dataKey}
            dataValue={dataValue}
            key={key}
            columns={value.columns}
            rows={value.rows}
          />
        );
      } else {
        if (value.inputType === "number") {
          return (
            <InputNumber
              key={key}
              label={value.label}
              value={value.value}
              onChange={(e) =>
                handleOnChange({
                  code: dataValue.code,
                  value: { key, value: e.target.value },
                })
              }
            />
          );
        } else if (value.inputType === "text") {
          return (
            <InputText
              key={key}
              label={value.label}
              value={value.value}
              onChange={(e) =>
                handleOnChange({
                  code: dataValue.code,
                  value: { key, value: e.target.value },
                })
              }
            />
          );
        } else if (value.inputType === "textArea") {
          return (
            <TextAreaInput
              key={key}
              label={value.label}
              value={value.value}
              onChange={(e) =>
                handleOnChange({
                  code: dataValue.code,
                  value: { key, value: e.target.value },
                })
              }
            />
          );
        }
      }
    });
  };

  return (
    <div className={`character-data-card card ${className}`}>
      <div className="character-data-card-header">
        <AddIcon height={17} />
        {dataValue.label}
        <EditIcon height={15} />
      </div>
      <div className="character-data-card-content">{renderStatItems()}</div>
    </div>
  );
};

export default CharacterDataCard;
