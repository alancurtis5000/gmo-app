import { useSelector, useDispatch } from "react-redux";
import AddIcon from "../../icons/add.icon";
import EditIcon from "../../icons/edit.icon";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import NumberInput from "../number-input/number-input.component";

const PlayerStatsCardArmorClass = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.userCharacter.data);
  const armorClass = character.stats.armorClass;
  const { value, title, temporary } = armorClass;

  const handleOnChange = (updatedcharacter) => {
    dispatch(updateUserCharacter(updatedcharacter));
  };

  return (
    <div className="player-stats-card-armor-class card armor-class">
      <div className="armor-header">
        <AddIcon height={17} />
        {title}
        <EditIcon height={15} />
      </div>
      <div className="armor-content">
        <NumberInput
          label="Current"
          value={value}
          onChange={(e) =>
            handleOnChange({
              ...character,
              stats: {
                ...character.stats,
                armorClass: {
                  ...character.stats.armorClass,
                  value: e.target.value,
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
                armorClass: {
                  ...character.stats.armorClass,
                  temporary: e.target.value,
                },
              },
            })
          }
        />
      </div>
    </div>
  );
};

export default PlayerStatsCardArmorClass;
