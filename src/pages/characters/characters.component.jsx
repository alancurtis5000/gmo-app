import Button from "../../components/button/button.component";
import { useHistory } from "react-router-dom";

const Characters = () => {
  let history = useHistory();

  const handleCharacterDetails = (id) => {
    // history.push(`/character/${id}`);
  };

  return (
    <div className="characters page">
      <h1>Characters</h1>
      list of characters
    </div>
  );
};

export default Characters;
