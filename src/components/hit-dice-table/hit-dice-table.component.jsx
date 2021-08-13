import map from "lodash/map";
import forEach from "lodash/forEach";
import { useSelector, useDispatch } from "react-redux";
import TextInput from "../text-input/text-input.component";
import NumberInput from "../number-input/number-input.component";
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

  const handleOnChange = (statToChange) => {
    const statCode = "hitDice";

    let currentHitDiceItems = character.stats.find(
      (stat) => stat.code === statCode
    ).items;
    const currentHitDie = currentHitDiceItems[statToChange.index];
    const updatedHitDie = {
      ...currentHitDie,
      [statToChange.key]: statToChange.value,
    };
    const updatedHitDiceItems = currentHitDiceItems;
    updatedHitDiceItems.splice(statToChange.index, 1, updatedHitDie);

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
        </div>
      );
      rowsMapped.push(createdRow);
    });

    return rowsMapped;
  };

  return (
    <div className={`hit-dice-table ${className}`} onClick={onClick}>
      <div className="table-header">{renderHeader()}</div>
      <div className="table-rows">{renderRows()}</div>
    </div>
  );
};

export default HitDiceTable;
