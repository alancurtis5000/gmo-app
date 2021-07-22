// split here each player see's their stats
// game master sees their page.
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getGameLobbyById as getGameLobbyByIdQuery } from "../../graphql/custom-queries";
import { useRouteMatch } from "react-router-dom";
import { API } from "aws-amplify";

const Game = () => {
  const userId = useSelector((state) => state.user.id);
  const match = useRouteMatch();
  const [game, setGame] = useState({});

  const getGame = async () => {
    const gameID = match.params.id;
    try {
      const result = await API.graphql({
        query: getGameLobbyByIdQuery,
        variables: {
          id: gameID,
        },
      });
      const { id, description, master, name, players } = result.data.getGame;
      setGame({
        id,
        master,
        name,
        description,
        players: players.items,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ game });
  return (
    <div className="game page">
      <h1>Game</h1>
    </div>
  );
};

export default Game;
