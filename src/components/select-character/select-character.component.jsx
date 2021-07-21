import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "../../components/select/select.component";
import { getCharactersByUserId as getCharactersByUserIdQuery } from "../../graphql/custom-queries";
import { API } from "aws-amplify";

const SelectCharacter = () => {
  const [selected, setSelected] = useState({});
  const [options, setOptions] = useState([]);

  const userId = useSelector((state) => state.user.id);

  const handleSelect = (item) => {
    setSelected(item);
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
        value={selected.name}
        placeholder="Character"
      />
    </div>
  );
};

export default SelectCharacter;
