import { useState, useEffect } from "react";
import Select from "@material-ui/core/Select";
import { API } from "aws-amplify";
import MenuItem from "@material-ui/core/MenuItem";
import { getUser as getUserQuery, listCharacters } from "../../graphql/queries";
import { useSelector } from "react-redux";

const SelectCharacter = () => {
  // TODO: working on character Select
  // need to make it live update the game. so everyone can see characters choosen
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [list, setList] = useState([]);
  const userId = useSelector((state) => state.user.id);
  const handleChange = (e) => {
    const characterId = e.target.value;
    const character = list.find((character) => character.id === characterId);
    if (character) {
      setSelectedCharacter(character);
    }
    console.log("handleChange", e.target.value);
  };

  const getCharacterList = async () => {
    if (userId) {
      try {
        const result = await API.graphql({
          query: getUserQuery,
          variables: {
            id: userId,
          },
        });
        const { characters } = result.data.getUser;
        setList(characters.items);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getCharacterList();
  }, [userId]);

  const renderListOfCharacters = () => {
    return list.map((character, i) => {
      return (
        <MenuItem key={i} value={character.id}>
          {character.name}
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <button onClick={() => console.log({ list, selectedCharacter })}>
        log
      </button>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCharacter.name}
        onChange={handleChange}
      >
        {renderListOfCharacters()}
      </Select>
    </div>
  );
};

export default SelectCharacter;
