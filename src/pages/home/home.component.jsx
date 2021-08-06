import Button from "../../components/button/button.component";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/header.component";

const Home = () => {
  let history = useHistory();

  const joinGame = () => {
    history.push("/join");
  };
  const characters = () => {
    history.push("/characters");
  };
  const createGame = () => {
    history.push("/create-game");
  };
  const testGameCharacter = () => {
    history.push("/test-game-character");
  };
  const testGameMaster = () => {
    history.push("/test-game-master");
  };

  return (
    <div className="home page">
      <Header title="Home" />
      <Button text="Join" onClick={joinGame} />
      <Button text="Characters" onClick={characters} />
      <Button text="Create Game" onClick={createGame} />
      <Button text="Test Game Character" onClick={testGameCharacter} />
      <Button text="Test Game Master" onClick={testGameMaster} />
    </div>
  );
};

export default Home;
