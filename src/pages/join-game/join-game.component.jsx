import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "aws-amplify";
import Button from "../../components/button/button.component";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { getGame as getGameQuery } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/header.component";

const initialFormState = { playerName: "", gameCode: "" };

const JoinGame = () => {
  const [formData, setFormData] = useState(initialFormState);
  const userId = useSelector((state) => state.user.id);
  const history = useHistory();

  useEffect(() => {}, []);

  async function joinGame() {
    if (!formData.playerName || !formData.gameCode) return;
    try {
      const result = await API.graphql({
        query: getGameQuery,
        variables: {
          id: formData.gameCode,
        },
      });
      const doesGameExist = result.data.getGame;
      if (doesGameExist) {
        const gameId = result.data.getGame.id;
        const input = {
          id: userId,
          userGameId: gameId,
          playerName: formData.playerName,
        };
        await API.graphql({
          query: updateUserMutation,
          variables: { input: input },
        });
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
      <Header title="Join Game" />
      <input
        onChange={(e) =>
          setFormData({ ...formData, playerName: e.target.value })
        }
        placeholder="Player Name"
        value={formData.playerName}
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
