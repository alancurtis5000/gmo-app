import TextInput from "../text-input/text-input.component";
import InputNumber from "../input-number/input-number.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import TextAreaInput from "../text-area-input/text-area-input.component";
import CheckBox from "../checkbox/checkbox.component";

const UserCharacterItemsMisc = () => {
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
      isEquipt: false,
      type: "misc",
      title: "",
      description: "",
      isMagic: false,
      value: 0,
      weight: 0,
      quantity: 0,
      armorClassContribution: 0,
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
    const filtered = items.filter((item) => item.type === "misc");

    return filtered.map((item) => {
      return (
        <div className="misc-card" key={item.id}>
          <h3>{item.title}</h3>
          <TextInput
            label="Title"
            value={item.title}
            onChange={(e) =>
              handleOnChangeItem({ ...item, title: e.target.value })
            }
          />
          <InputNumber
            label="Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleOnChangeItem({ ...item, quantity: e.target.value })
            }
          />
          <InputNumber
            label="Armor Class Contribution"
            value={item.armorClassContribution}
            onChange={(e) =>
              handleOnChangeItem({
                ...item,
                armorClassContribution: e.target.value,
              })
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
    <div className="user-character-items-misc">
      <h2>Misc</h2>
      <Button text="+" onClick={handleAddItem} />
      {renderItems()}
    </div>
  );
};

export default UserCharacterItemsMisc;
