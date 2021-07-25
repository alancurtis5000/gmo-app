import { useState } from "react";
import Button from "../../components/button/button.component";
import Checkbox from "../checkbox/checkbox.component";
import UserCharacterDetails from "../user-character-details/user-character-details.component";
import UserCharacterAbilities from "../user-character-abilities/user-character-abilities.component";
import { useRouteMatch } from "react-router";

import { connect } from "react-redux";

const CreateCharacter = () => {
  const characterId = useRouteMatch().params.id;
  const isCreateCharacter = !characterId;
  console.log({ characterId, isCreateCharacter });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="user-character page">
      <div>
        {isCreateCharacter ? (
          ""
        ) : (
          <Checkbox
            label="Edit"
            onChange={() => setIsEdit(!isEdit)}
            id="is-edit"
            checked={isEdit}
          />
        )}
      </div>

      <div>{isEdit ? "in edit mode" : ""}</div>
      <div>User Character Comp {isCreateCharacter ? "create mode" : ""}</div>
      <UserCharacterDetails />
      <UserCharacterAbilities />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCharacter);
