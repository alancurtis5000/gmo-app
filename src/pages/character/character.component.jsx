import Button from "../../components/button/button.component";
import { useHistory } from "react-router-dom";

const Character = () => {
  let history = useHistory();
  // can edit, or create new characters

  return (
    <div className="character page">
      <h1>Character</h1>
      character Details
    </div>
  );
};

export default Character;
