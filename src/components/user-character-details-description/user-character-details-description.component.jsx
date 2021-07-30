import { useDispatch, useSelector } from "react-redux";
import TextInput from "../text-input/text-input.component";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";
import NumberInput from "../number-input/number-input.component";

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
      <TextInput
        label="Eyes"
        value={description?.eyes}
        onChange={(e) => handleOnChange({ eyes: e.target.value })}
      />
      <TextInput
        label="Hair"
        value={description?.hair}
        onChange={(e) => handleOnChange({ hair: e.target.value })}
      />
      <TextInput
        label="Skin"
        value={description?.skin}
        onChange={(e) => handleOnChange({ skin: e.target.value })}
      />
      <TextInput
        label="Size"
        value={description?.size}
        onChange={(e) => handleOnChange({ size: e.target.value })}
      />
      <NumberInput
        label="Age"
        value={description?.age}
        onChange={(e) => handleOnChange({ age: e.target.value })}
      />
    </>
  );
};

export default UserCharacterDetailsDescription;
