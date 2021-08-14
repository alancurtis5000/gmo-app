import map from "lodash/map";
import forEach from "lodash/forEach";
import { useSelector, useDispatch } from "react-redux";
import TextInput from "../text-input/text-input.component";
import NumberInput from "../number-input/number-input.component";
import Button from "../button/button.component";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";

const HitDiceTable = (props) => {
  const { className, onClick, columns, rows } = props;
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const renderHeader = () => {
    return columns.map((column, i) => (
      <div key={i} className={`header-field-${i}`}>
        {column.label}
      </div>
    ));
  };

  const handleOnChange = (hitDieToChange) => {
    const statCode = "hitDice";

    let currentHitDiceItems = character.stats.find(
      (stat) => stat.code === statCode
    ).items;
    const currentHitDie = currentHitDiceItems[hitDieToChange.index];
    const updatedHitDie = {
      ...currentHitDie,
      [hitDieToChange.key]: hitDieToChange.value,
    };
    const updatedHitDiceItems = currentHitDiceItems;
    updatedHitDiceItems.splice(hitDieToChange.index, 1, updatedHitDie);

    let currentHitDice = character.stats.find((stat) => stat.code === statCode);

    const updatedHitDice = { ...currentHitDice, items: updatedHitDiceItems };

    const statIndex = character.stats.findIndex(
      (stat) => stat.code === statCode
    );
    let updatedStats = character.stats.map((x) => x);
    updatedStats.splice(statIndex, 1, updatedHitDice);

    const updatedCharacter = {
      ...character,
      stats: updatedStats,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  const handleAddHitDie = () => {
    console.log("handleAddHitDie");

    const statCode = "hitDice";
    let currentHitDice = character.stats.find((stat) => stat.code === statCode);
    console.log({ currentHitDice, l: currentHitDice.items.length });
    const newHitDie = {
      id: currentHitDice.items.length + 1,
      level: 0,
      die: "",
      used: 0,
    };
    currentHitDice.items.push(newHitDie);
    const updatedHitDice = { ...currentHitDice };

    const statIndex = character.stats.findIndex(
      (stat) => stat.code === statCode
    );
    let updatedStats = character.stats.map((x) => x);
    updatedStats.splice(statIndex, 1, updatedHitDice);

    const updatedCharacter = {
      ...character,
      stats: updatedStats,
    };
    dispatch(updateUserCharacter(updatedCharacter));
  };

  const handleRemoveHitDie = (rowIndex) => {
    console.log("handleRemoveHitDie", rowIndex);

    const statCode = "hitDice";
    let currentHitDiceItems = character.stats.find(
      (stat) => stat.code === statCode
    ).items;

    const updatedHitDiceItems = currentHitDiceItems;
    updatedHitDiceItems.splice(rowIndex, 1);

    let currentHitDice = character.stats.find((stat) => stat.code === statCode);

    const updatedHitDice = { ...currentHitDice, items: updatedHitDiceItems };

    const statIndex = character.stats.findIndex(
      (stat) => stat.code === statCode
    );
    let updatedStats = character.stats.map((x) => x);
    updatedStats.splice(statIndex, 1, updatedHitDice);

    const updatedCharacter = {
      ...character,
      stats: updatedStats,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  const renderRows = () => {
    let rowsMapped = [];
    forEach(rows, (row, i) => {
      let rowValue = map(row, (value, key, index, another) => {
        let shouldDisplay = !!columns.find((column) => column.field === key);
        if (shouldDisplay) {
          if (typeof value === "number") {
            return (
              <NumberInput
                key={key}
                className="row-item"
                value={value}
                onChange={(e) =>
                  handleOnChange({
                    key: key,
                    index: i,
                    value: e.target.value * 1,
                  })
                }
              />
            );
          } else {
            return (
              <TextInput
                key={key}
                className="row-item"
                value={value}
                onChange={(e) =>
                  handleOnChange({
                    key: key,
                    index: i,
                    value: e.target.value,
                  })
                }
              />
            );
          }
        }
      });
      let createdRow = (
        <div key={i} className="row">
          {rowValue}
          <Button text="X" onClick={() => handleRemoveHitDie(i)} />
        </div>
      );
      rowsMapped.push(createdRow);
    });

    return rowsMapped;
  };

  return (
    <div className={`hit-dice-table ${className}`} onClick={onClick}>
      <Button text="Add" onClick={handleAddHitDie} />
      <div className="table-header">{renderHeader()}</div>
      <div className="table-rows">{renderRows()}</div>
    </div>
  );
};

export default HitDiceTable;
