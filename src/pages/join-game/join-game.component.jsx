import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "aws-amplify";
import Button from "../../components/button/button.component";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { getGame as getGameQuery } from "../../graphql/queries";
import { useHistory } from "react-router-dom";

const initialFormState = { name: "", gameCode: "" };

const JoinGame = () => {
  const [formData, setFormData] = useState(initialFormState);
  const userId = useSelector((state) => state.user.id);
  const history = useHistory();

  useEffect(() => {}, []);

  async function joinGame() {
    console.log("joinGame");
    if (!formData.name || !formData.gameCode) return;
    try {
      const result = await API.graphql({
        query: getGameQuery,
        variables: {
          id: formData.gameCode,
        },
      });
      console.log({ result });
      const doesGameExist = result.data.getGame;
      if (doesGameExist) {
        const gameId = result.data.getGame.id;
        const input = {
          id: userId,
          userGameId: gameId,
        };
        const response = await API.graphql({
          query: updateUserMutation,
          variables: { input: input },
        });
        console.log("Join Game button", { response });
        history.push(`/game-lobby/${gameId}`);
      }
      // const { id, description, master, name } = result.data.getGame;
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
