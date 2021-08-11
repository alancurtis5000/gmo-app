import { useSelector, useDispatch } from "react-redux";
import AddIcon from "../../icons/add.icon";
import EditIcon from "../../icons/edit.icon";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import NumberInput from "../number-input/number-input.component";

const PlayerStatsCardHitPoints = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);
  const hitPoints = character.stats.hitPoints;
  const { current, title, temporary, max } = hitPoints;

  const handleOnChange = (updatedcharacter) => {
    dispatch(updateUserCharacter(updatedcharacter));
  };

  return (
    <div className="player-stats-card-hit-points card hit-points">
      <div className="hit-points-header">
        <AddIcon height={17} />
        {title}
        <EditIcon height={15} />
      </div>
      <div className="hit-points-content">
        <NumberInput
          label="Current"
          value={current}
          onChange={(e) =>
            handleOnChange({
              ...character,
              stats: {
                ...character.stats,
                hitPoints: {
                  ...character.stats.hitPoints,
                  current: e.target.value,
                },
              },
            })
          }
        />
        <NumberInput
          label="Temp"
          value={temporary}
          onChange={(e) =>
            handleOnChange({
              ...character,
              stats: {
                ...character.stats,
                hitPoints: {
                  ...character.stats.hitPoints,
                  temporary: e.target.value,
                },
              },
            })
          }
        />
        <NumberInput
          label="Max"
          value={max}
          onChange={(e) =>
            handleOnChange({
              ...character,
              stats: {
                ...character.stats,
                hitPoints: {
                  ...character.stats.hitPoints,
                  max: e.target.value,
                },
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default PlayerStatsCardHitPoints;
