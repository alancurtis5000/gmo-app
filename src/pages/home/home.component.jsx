import Button from "../../components/button/button.component";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  const joinGame = () => {
    history.push("/join");
  };
  const createCharacter = () => {
    history.push("/create-character");
  };
  const createGame = () => {
    history.push("/create-game");
  };

  return (
    <div className="home page">
      <h1>home</h1>
      <Button text="Join" onClick={joinGame} />
      <Button text="Create Character" onClick={createCharacter} />
      <Button text="Create Game" onClick={createGame} />
    </div>
  );
};

export default Home;
