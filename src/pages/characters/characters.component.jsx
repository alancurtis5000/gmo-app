import CharacterList from "../../components/character-list/character-list.component";
import Button from "../../components/button/button.component";
import { useHistory } from "react-router";
import Header from "../../components/header/header.component";
import { useDispatch } from "react-redux";
import { resetUserCharacter } from "../../redux/user-character/user-character.actions";

const Characters = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoToCreateCharacter = () => {
    dispatch(resetUserCharacter());
    history.push("/create-character");
  };

  return (
    <div className="characters page">
      <Header title="Characters" />
      <Button text="Create Character" onClick={handleGoToCreateCharacter} />
      <CharacterList />
    </div>
  );
};

export default Characters;
