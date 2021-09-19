import InputText from "../input-text/input-text.component";
import InputNumber from "../input-number/input-number.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import InputTextArea from "../input-text-area/input-text-area.component";
import CheckBox from "../checkbox/checkbox.component";

const UserCharacterItemsWeapons = () => {
  const character = useSelector((state) => state.userCharacter.data);
  const { items } = character;

  const dispatch = useDispatch();

  const handleOnChange = (updatedItems) => {
    let update = {
      items: updatedItems,
    };

    dispatch(updateUserCharacterLocal(update));
  };

  const handleAddItem = () => {
    let updateItems = [...items];
    updateItems.push({
      id: updateItems.length + 1,
      quantity: 1,
      type: "weapon",
      damageDice: "",
      title: "",
      advantageToHit: 0,
      damageType: "",
      isEquipt: false,
      isMagic: false,
      isTwoHanded: false,
      range: {
        type: "",
        distance: { min: 0, max: 0, disadvantage: 0 },
      },
      value: 0,
      description: "",
      weight: 0,
    });
    handleOnChange(updateItems);
  };

  const handleOnChangeItem = (updatedItem) => {
    let updatedItems = [...items];
    const index = updatedItems.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      updatedItems.splice(index, 1, updatedItem);
      let update = updatedItems;
      handleOnChange(update);
    }
  };

  const handleDeleteItem = (itemToDelete) => {
    let updatedItems = [...items];
    const index = updatedItems.findIndex((item) => item.id === itemToDelete.id);
    if (index !== -1) {
      updatedItems.splice(index, 1);
      let update = updatedItems;
      handleOnChange(update);
    }
  };

  const renderItems = () => {
    const filtered = items.filter((item) => item.type === "weapon");

    return filtered.map((item) => {
      return (
        <div className="weapon-card" key={item.id}>
          <h3>{item.title}</h3>
          <InputText
            label="Title"
            value={item.title}
            onChange={(e) =>
              handleOnChangeItem({ ...item, title: e.target.value })
            }
          />
          <InputText
            label="Damage Dice"
            value={item.damageDice}
            onChange={(e) =>
              handleOnChangeItem({ ...item, damageDice: e.target.value })
            }
          />
          <InputNumber
            label="Advantage to hit"
            value={item.advantageToHit}
            onChange={(e) =>
              handleOnChangeItem({ ...item, advantageToHit: e.target.value })
            }
          />
          <InputNumber
            label="Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleOnChangeItem({ ...item, quantity: e.target.value })
            }
          />
          <InputText
            label="Damage Type"
            value={item.damageType}
            onChange={(e) =>
              handleOnChangeItem({ ...item, damageType: e.target.value })
            }
          />
          <CheckBox
            label="Equipt"
            checked={item.isEquipt}
            onChange={(e) =>
              handleOnChangeItem({ ...item, isEquipt: !item.isEquipt })
            }
          />
          <CheckBox
            label="Is Magical"
            checked={item.isMagic}
            onChange={(e) =>
              handleOnChangeItem({ ...item, isMagic: !item.isMagic })
            }
          />
          <CheckBox
            label="Is Two Handed"
            checked={item.isTwoHanded}
            onChange={(e) =>
              handleOnChangeItem({ ...item, isTwoHanded: !item.isTwoHanded })
            }
          />
          <InputNumber
            label="Value"
            value={item.value}
            onChange={(e) =>
              handleOnChangeItem({ ...item, value: e.target.value })
            }
          />
          <InputNumber
            label="Weight"
            value={item.weight}
            onChange={(e) =>
              handleOnChangeItem({ ...item, weight: e.target.value })
            }
          />
          <div>
            <h3>Range</h3>
            <InputText
              label="Type"
              value={item.range.type}
              onChange={(e) =>
                handleOnChangeItem({
                  ...item,
                  range: { ...item.range, type: e.target.value },
                })
              }
            />
            <InputNumber
              label="Min"
              value={item.range.distance.min}
              onChange={(e) =>
                handleOnChangeItem({
                  ...item,
                  range: {
                    ...item.range,
                    distance: { ...item.range.distance, min: e.target.value },
                  },
                })
              }
            />
            <InputNumber
              label="Max"
              value={item.range.distance.max}
              onChange={(e) =>
                handleOnChangeItem({
                  ...item,
                  range: {
                    ...item.range,
                    distance: { ...item.range.distance, max: e.target.value },
                  },
                })
              }
            />
            <InputNumber
              label="Disadvantage"
              value={item.range.distance.disadvantage}
              onChange={(e) =>
                handleOnChangeItem({
                  ...item,
                  range: {
                    ...item.range,
                    distance: {
                      ...item.range.distance,
                      disadvantage: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
          <InputTextArea
            label="Description"
            value={item.description}
            onChange={(e) =>
              handleOnChangeItem({ ...item, description: e.target.value })
            }
          />

          <Button text="Remove" onClick={() => handleDeleteItem(item)} />
        </div>
      );
    });
  };

  return (
    <div className="user-character-items-weapons">
      <h2>Weapons</h2>
      <Button text="+" onClick={handleAddItem} />
      {renderItems()}
    </div>
  );
};

export default UserCharacterItemsWeapons;
