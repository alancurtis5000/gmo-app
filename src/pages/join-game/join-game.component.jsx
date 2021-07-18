import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Button from "../../components/button/button.component";
import { updateGame as updateGameMutation } from "../../graphql/mutations";
import { listGames as listGamesQuery } from "../../graphql/queries";

const initialFormState = { name: "", gameCode: "" };

const JoinGame = () => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {}, []);

  async function joinGame() {
    console.log("joinGame");
    if (!formData.name || !formData.gameCode) return;
    try {
      // const response = await API.graphql({
      //   query: updateGameMutation,
      //   variables: { input: formData },
      // });
      // console.log("update button", { response });
    } catch (error) {
      console.log(error);
    }
  }

  // todo: have player also select a character from their character list.

  return (
    <div className="join-game page">
      <h1>Join Game</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Player Name"
        value={formData.name}
      />
      <input
        onChange={(e) => setFormData({ ...formData, gameCode: e.target.value })}
        placeholder="Game Code"
        value={formData.gameCode}
      />

      <Button text="Join Game" onClick={joinGame} />
    </div>
  );
};

export default JoinGame;
