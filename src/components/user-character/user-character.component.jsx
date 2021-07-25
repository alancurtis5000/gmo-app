import { useEffect } from "react";
import Button from "../../components/button/button.component";
import UserCharacterDetails from "../user-character-details/user-character-details.component";
import UserCharacterAbilities from "../user-character-abilities/user-character-abilities.component";
import { useRouteMatch } from "react-router";
import { useDispatch } from "react-redux";
import {
  resetUserCharacter,
  getUserCharacter,
  createCharacter,
} from "../../redux/user-character/user-character.actions";

import { connect } from "react-redux";

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
  };
  const handleCreateCharacter = () => {
    console.log("handleCreateCharacter");
    dispatch(createCharacter());
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCharacter);
