import NumberInput from "../number-input/number-input.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import { useSelector, useDispatch } from "react-redux";

const UserCharacterMoney = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const { money } = character;

  const dispatch = useDispatch();

  const handleOnChange = (updatedMoney) => {
    let update = {
      money: { ...money, ...updatedMoney },
    };
    dispatch(updateUserCharacterLocal(update));
  };

  const renderMoney = () => {
    let moneyArray = [];

    for (const [key, value] of Object.entries(money)) {
      moneyArray.push(
        <div key={key}>
          <NumberInput
            label={key}
            value={value}
            onChange={(e) => handleOnChange({ [key]: e.target.value })}
          />
        </div>
      );
    }
    return moneyArray;
  };

  return (
    <div className="user-character-money">
      <h2>Money</h2>
      {renderMoney()}
    </div>
  );
};

export default UserCharacterMoney;
