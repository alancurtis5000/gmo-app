// import CharacterList from "../../components/character-list/character-list.component";
import CharacterListContainer from "../../components/character-list/character-list.container";
import Button from "../../components/button/button.component";
import { useHistory } from "react-router";
import Header from "../../components/header/header.component";
import { useDispatch, useSelector } from "react-redux";
import { resetUserCharacter } from "../../redux/user-character/user-character.actions";
import { useEffect } from "react";
import { getUserCharacters } from "../../redux/user-characters/user-characters.actions";

const Characters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.user.id);

  const handleGoToCreateCharacter = () => {
    dispatch(resetUserCharacter());
    history.push("/create-character");
  };

  useEffect(() => {
    if (userId) {
      dispatch(getUserCharacters());
    }
  }, [userId]);

  return (
    <div className="characters page">
      <Header title="Characters" />
      <Button text="Create Character" onClick={handleGoToCreateCharacter} />
      <CharacterListContainer />
    </div>
  );
};

export default Characters;
