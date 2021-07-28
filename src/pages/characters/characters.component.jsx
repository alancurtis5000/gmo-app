import CharacterList from "../../components/character-list/character-list.component";
import Button from "../../components/button/button.component";
import { useHistory } from "react-router";
import Header from "../../components/header/header.component";
const Characters = () => {
  const history = useHistory();
  const handleGoToCreateCharacter = () => {
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
