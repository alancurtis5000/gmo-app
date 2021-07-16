import Button from "../../components/button/button.component";
const Home = () => {
  const joinGame = () => {
    console.log("joinGame");
  };

  const createGame = () => {
    console.log("createGame");
  };

  return (
    <div className="home page">
      <h1>home</h1>
      <Button text="Join" onClick={joinGame} />
      <Button text="Create" onClick={createGame} />
    </div>
  );
};

export default Home;
