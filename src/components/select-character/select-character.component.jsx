import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "../../components/select/select.component";
import { getCharactersByUserId as getCharactersByUserIdQuery } from "../../graphql/custom-queries";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { API } from "aws-amplify";

const SelectCharacter = (props) => {
  const { disabled } = props;
  const [selected, setSelected] = useState({});
  const [options, setOptions] = useState([]);

  const userId = useSelector((state) => state.user.id);
  const handleSelect = (character) => {
    updateUserWithSelectedCharacter(character.id);
    setSelected(character);
  };

  const getCharacters = async () => {
    try {
      const result = await API.graphql({
        query: getCharactersByUserIdQuery,
        variables: {
          id: userId,
        },
      });
      setOptions(result.data.getUser.characters.items);
      setSelected(result.data.getUser.selectedCharacter);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserWithSelectedCharacter = async (characterId) => {
    try {
      const input = {
        id: userId,
        userSelectedCharacterId: characterId,
      };
      await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="select-character">
      <Select
        options={options}
        handleSelect={handleSelect}
        value={selected?.name}
        placeholder="Character"
        disabled={disabled}
      />
    </div>
  );
};

export default SelectCharacter;
