import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import { getGame as getGameQuery } from "../../graphql/queries";

const GameLobby = () => {
  const [lobby, setLobby] = useState({
    id: "",
    master: "",
    name: "",
    players: [],
  });

  const location = useLocation();
  const match = useRouteMatch();
  console.log({ location, match });
  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGame = async () => {
    const gameID = match.params.id;
    try {
      const result = await API.graphql({
        query: getGameQuery,
        variables: {
          id: gameID,
        },
      });
      console.log({ result });
      const { id, description, master, name } = result.data.getGame;
      setLobby({
        id,
        master,
        name,
        description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="game-lobby page">
      <h1>Game Lobby</h1>
      <div>{`ID: ${lobby.id}`}</div>
      <div>{`Name: ${lobby.name}`}</div>
      <div>{`Description: ${lobby.description}`}</div>
      <div>{`Game Master: ${lobby.master.name}`}</div>
    </div>
  );
};

export default GameLobby;
