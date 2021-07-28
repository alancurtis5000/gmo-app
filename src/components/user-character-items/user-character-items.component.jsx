import UserCharacterItemsAmmo from "../user-character-items-ammo/user-character-ammo.component";
import UserCharacterItemsArmor from "../user-character-items-armor/user-character-armor.component";
import UserCharacterItemsMisc from "../user-character-items-misc/user-character-misc.component";
import UserCharacterItemsWeapons from "../user-character-items-weapons/user-character-weapons.component";

const UserCharacterItems = () => {
  return (
    <div className="create-character-abilities page">
      <h2>Items</h2>
      <UserCharacterItemsWeapons />
      <UserCharacterItemsArmor />
      <UserCharacterItemsMisc />
      <UserCharacterItemsAmmo />
    </div>
  );
};

export default UserCharacterItems;
