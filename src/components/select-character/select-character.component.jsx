import { useState, useEffect } from "react";
import Select from "@material-ui/core/Select";
import { API } from "aws-amplify";
import MenuItem from "@material-ui/core/MenuItem";
import { getUser as getUserQuery } from "../../graphql/queries";
import { useSelector } from "react-redux";

const SelectCharacter = () => {
  // TODO: working on character Select
  const [character, setCharacter] = useState({});
  const [list, setList] = useState([]);
  const userId = useSelector((state) => state.user.id);
  const handleChange = (e) => {
    console.log("handleChange", e);
  };

  const getCharacterList = async () => {
    console.log("getCharacterList");
    try {
      console.log({ userId });
      const result = await API.graphql({
        query: getUserQuery,
        variables: {
          id: userId,
        },
      });
      console.log("user !!!!", { result });
      const { characters } = result.data.getUser;

      setList(characters.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacterList();
  }, []);

  const renderListOfCharacters = () => {
    list.map((character, i) => {
      console.log(character);
      return (
        <MenuItem key={i} value={character.id}>
          hello {character.name}
        </MenuItem>
      );
    });
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={character.name}
      onChange={handleChange}
    >
      {renderListOfCharacters()}
    </Select>
  );
};

export default SelectCharacter;
