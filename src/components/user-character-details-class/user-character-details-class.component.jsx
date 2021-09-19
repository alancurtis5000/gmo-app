import { useDispatch, useSelector } from "react-redux";
import InputText from "../input-text/input-text.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import InputNumber from "../input-number/input-number.component";
import Button from "../button/button.component";

const UserCharacterDetailsClass = (props) => {
  const { aClass } = props;
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();

  const handleDeleteClass = () => {
    let updatedClasses = [...character.details.classes];
    const index = updatedClasses.findIndex((xClass) => xClass.id === aClass.id);
    if (index !== -1) {
      updatedClasses.splice(index, 1);
      const update = {
        details: {
          ...character?.details,
          classes: updatedClasses,
        },
      };
      dispatch(updateUserCharacterLocal(update));
    }
  };

  const handleOnChange = (aClass) => {
    let updatedClasses = [...character.details.classes];
    const index = updatedClasses.findIndex((xClass) => xClass.id === aClass.id);
    if (index !== -1) {
      updatedClasses.splice(index, 1, aClass);
    } else {
      updatedClasses.push(aClass);
    }
    const update = {
      details: {
        ...character?.details,
        classes: updatedClasses,
      },
    };
    dispatch(updateUserCharacterLocal(update));
  };

  return (
    <>
      <InputText
        label="Class"
        value={aClass.type}
        onChange={(e) =>
          handleOnChange({
            ...aClass,
            type: e.target.value,
          })
        }
      />
      <InputNumber
        label="Level"
        value={aClass.level}
        onChange={(e) =>
          handleOnChange({
            ...aClass,
            level: e.target.value,
          })
        }
      />
      <Button text="-" onClick={handleDeleteClass} />
    </>
  );
};

export default UserCharacterDetailsClass;
