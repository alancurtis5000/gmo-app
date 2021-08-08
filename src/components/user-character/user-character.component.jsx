import { useEffect } from "react";
import Button from "../../components/button/button.component";
import UserCharacterDetails from "../user-character-details/user-character-details.component";
import UserCharacterAbilities from "../user-character-abilities/user-character-abilities.component";
import { useRouteMatch, useHistory } from "react-router";
import { useDispatch } from "react-redux";
import {
  getUserCharacter,
  saveUserCharacterApiCall,
} from "../../redux/user-character/user-character.actions";
import UserCharacterSavingThrows from "../user-character-saving-throws/user-character-saving-throws.component";
import UserCharacterStats from "../user-character-stats/user-character-stats.component";
import UserCharacterFeatures from "../user-character-features/user-character-features.component";
import UserCharacterItems from "../user-character-items/user-character-items.component";
import UserCharacterMoney from "../user-character-money/user-character-money.component";

const CreateCharacter = () => {
  const characterId = useRouteMatch().params.id;
  const history = useHistory();
  const isCreateCharacter = !characterId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (characterId) {
      dispatch(getUserCharacter(characterId));
    }
  }, [characterId, dispatch]);

  const handleSaveOrCreate = () => {
    dispatch(saveUserCharacterApiCall());
    history.goBack();
  };

  return (
    <div className="user-character page">
      <UserCharacterDetails />
      <UserCharacterAbilities />
      <UserCharacterSavingThrows />
      <UserCharacterStats />
      <UserCharacterFeatures />
      <UserCharacterItems />
      <UserCharacterMoney />

      <Button
        text={isCreateCharacter ? "Create" : "Save"}
        onClick={handleSaveOrCreate}
      />
    </div>
  );
};

export default CreateCharacter;
