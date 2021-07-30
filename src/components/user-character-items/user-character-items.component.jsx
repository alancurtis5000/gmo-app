import UserCharacterItemsAmmo from "../user-character-items-ammo/user-character-items-ammo.component";
import UserCharacterItemsArmor from "../user-character-items-armor/user-character-armor.component";
import UserCharacterItemsMisc from "../user-character-items-misc/user-character-items-misc.component";
import UserCharacterItemsWeapons from "../user-character-items-weapons/user-character-weapons.component";

const UserCharacterItems = () => {
  return (
    <div className="user-character-items">
      <h2>Items</h2>
      <UserCharacterItemsWeapons />
      <UserCharacterItemsArmor />
      <UserCharacterItemsMisc />
      <UserCharacterItemsAmmo />
    </div>
  );
};

export default UserCharacterItems;
