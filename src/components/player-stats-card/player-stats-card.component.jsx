import { useSelector, useDispatch } from "react-redux";
import AddIcon from "../../icons/add.icon";
import EditIcon from "../../icons/edit.icon";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import NumberInput from "../number-input/number-input.component";
import HitDiceTable from "../hit-dice-table/hit-dice-table.component";
import map from "lodash/map";

const PlayerStatsCard = (props) => {
  const { stat, className } = props;
  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);

  const handleOnChange = (statToChange) => {
    console.log(statToChange);
    const statIndex = character.stats.findIndex(
      (stat) => stat.code === statToChange.code
    );
    const currentStatValue = character.stats.find(
      (stat) => stat.code === statToChange.code
    );

    const updatedStat = {
      ...currentStatValue,
      [statToChange.value.key]: {
        ...currentStatValue[statToChange.value.key],
        value: statToChange.value.value * 1,
      },
    };

    let updatedStats = character.stats.map((x) => x);
    updatedStats.splice(statIndex, 1, updatedStat);

    const updatedCharacter = {
      ...character,
      stats: updatedStats,
    };

    dispatch(updateUserCharacter(updatedCharacter));
  };

  const columns = [
    { field: "level", label: "Level" },
    { field: "die", label: "Die" },
    { field: "used", label: "Used" },
  ];

  const renderStatItems = () => {
    return map(stat, (value, key) => {
      if (key === "label" || key === "code") {
        return;
      }
      if (key === "items") {
        console.log({ value, key });
        return <HitDiceTable key={key} columns={columns} rows={value} />;
      } else {
        return (
          <NumberInput
            key={key}
            label={value.label}
            value={value.value}
            onChange={(e) =>
              handleOnChange({
                code: stat.code,
                value: { key, value: e.target.value },
              })
            }
          />
        );
      }
    });
  };

  return (
    <div className={`player-stats-card card ${className}`}>
      <div className="stat-card-header">
        <AddIcon height={17} />
        {stat.label}
        <EditIcon height={15} />
      </div>
      <div className="stat-card-content">{renderStatItems()}</div>
    </div>
  );
};

export default PlayerStatsCard;
