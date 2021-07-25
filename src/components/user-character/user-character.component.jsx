import { useEffect } from "react";
import Button from "../../components/button/button.component";
import UserCharacterDetails from "../user-character-details/user-character-details.component";
import UserCharacterAbilities from "../user-character-abilities/user-character-abilities.component";
import { useRouteMatch } from "react-router";
import { useDispatch } from "react-redux";
import {
  resetUserCharacter,
  getUserCharacter,
  createUserCharacter,
  updateUserCharacter,
} from "../../redux/user-character/user-character.actions";

const CreateCharacter = () => {
  const characterId = useRouteMatch().params.id;
  const isCreateCharacter = !characterId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (characterId) {
      dispatch(getUserCharacter(characterId));
    }
    return () => {
      dispatch(resetUserCharacter());
    };
  }, [characterId, dispatch]);

  const handleSave = () => {
    console.log("handleSave");
    dispatch(updateUserCharacter());
  };
  const handleCreateCharacter = () => {
    console.log("handleCreateCharacter");
    dispatch(createUserCharacter());
    // TODO: wait till success then push to page
  };

  return (
    <div className="user-character page">
      <div>User Character Comp {isCreateCharacter ? "create mode" : ""}</div>
      <UserCharacterDetails />
      <UserCharacterAbilities />
      {isCreateCharacter ? (
        <Button text="Create" onClick={handleCreateCharacter} />
      ) : (
        <Button text="Save" onClick={handleSave} />
      )}
    </div>
  );
};

export default CreateCharacter;
