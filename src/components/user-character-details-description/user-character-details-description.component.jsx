import { useDispatch, useSelector } from "react-redux";
import InputText from "../input-text/input-text.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import InputNumber from "../input-number/input-number.component";

const UserCharacterDetailsDescription = () => {
  const description = useSelector(
    (state) => state?.userCharacter?.data?.details?.description
  );
  const details = useSelector((state) => state?.userCharacter?.data?.details);
  const dispatch = useDispatch();

  const handleOnChange = (updatedDescription) => {
    const update = {
      details: {
        ...details,
        description: {
          ...details.description,
          ...updatedDescription,
        },
      },
    };
    dispatch(updateUserCharacterLocal(update));
  };

  return (
    <>
      <InputText
        label="Eyes"
        value={description?.eyes}
        onChange={(e) => handleOnChange({ eyes: e.target.value })}
      />
      <InputText
        label="Hair"
        value={description?.hair}
        onChange={(e) => handleOnChange({ hair: e.target.value })}
      />
      <InputText
        label="Skin"
        value={description?.skin}
        onChange={(e) => handleOnChange({ skin: e.target.value })}
      />
      <InputText
        label="Size"
        value={description?.size}
        onChange={(e) => handleOnChange({ size: e.target.value })}
      />
      <InputNumber
        label="Age"
        value={description?.age}
        onChange={(e) => handleOnChange({ age: e.target.value })}
      />
    </>
  );
};

export default UserCharacterDetailsDescription;
