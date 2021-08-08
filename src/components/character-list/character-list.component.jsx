import { useEffect } from "react";
import CharacterListCard from "../character-list-card/character-list-card.component";
import { getUserCharacters } from "../../redux/user-characters/user-characters.actions";
import { useDispatch, useSelector } from "react-redux";

const CharacterList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const userCharacters = useSelector((state) => state.userCharacters.data);

  useEffect(() => {
    if (userId) {
      dispatch(getUserCharacters());
    }
  }, [userId]);

  const displayCharacters = () => {
    return userCharacters.map((character, i) => {
      return <CharacterListCard key={character.id} character={character} />;
    });
  };

  return (
    <div>
      <div>List of Characters</div>
      {displayCharacters()}
    </div>
  );
};

export default CharacterList;
