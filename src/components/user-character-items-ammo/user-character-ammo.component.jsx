import TextInput from "../text-input/text-input.component";
import NumberInput from "../number-input/number-input.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import TextAreaInput from "../text-area-input/text-area-input.component";
import CheckBox from "../checkbox/checkbox.component";

const UserCharacterItemsAmmo = () => {
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
      type: "ammo",
      isEquipt: false,
      title: "",
      description: "",
      isMagic: false,
      quantity: 0,
      weight: 0,
      damageDice: "",
      damageType: "",
      value: 0,
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
    const filtered = items.filter((item) => item.type === "ammo");

    return filtered.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <TextInput
            label="Title"
            value={item.title}
            onChange={(e) =>
              handleOnChangeItem({ ...item, title: e.target.value })
            }
          />
          <NumberInput
            label="Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleOnChangeItem({ ...item, quantity: e.target.value })
            }
          />
          <TextInput
            label="Damage Dice"
            value={item.damageDice}
            onChange={(e) =>
              handleOnChangeItem({ ...item, damageDice: e.target.value })
            }
          />
          <TextInput
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
          <NumberInput
            label="Value"
            value={item.value}
            onChange={(e) =>
              handleOnChangeItem({ ...item, value: e.target.value })
            }
          />
          <NumberInput
            label="Weight"
            value={item.weight}
            onChange={(e) =>
              handleOnChangeItem({ ...item, weight: e.target.value })
            }
          />

          <TextAreaInput
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
    <div className="create-character-abilities page">
      <h2>Ammo</h2>
      <Button text="+" onClick={handleAddItem} />
      {renderItems()}
    </div>
  );
};

export default UserCharacterItemsAmmo;
