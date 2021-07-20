import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { getGame as getGameQuery } from "../../graphql/queries";
// import { newOnUpdateGame } from "../../graphql/subscriptions";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const GameLobby = () => {
  // let subscriptionOnUpdate;
  const history = useHistory();
  const userId = useSelector((state) => state.user.id);
  // const [update, setUpdate] = useState(false);
  const [lobby, setLobby] = useState({
    id: "",
    master: "",
    name: "",
    description: "",
    players: [],
  });

  // const setupSubscriptions = () => {
  //   subscriptionOnUpdate = API.graphql(
  //     graphqlOperation(newOnUpdateGame)
  //   ).subscribe({
  //     next: (gamesData) => {
  //       console.log("update sub", { gamesData });
  //       setUpdate(true);
  //     },
  //   });
  // };

  useEffect(() => {
    // setupSubscriptions();
    getGame();
    return () => {
      // subscriptionOnUpdate.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Todo: add subscriptions to game update, when players join.
  const match = useRouteMatch();
  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (update) {
  //     getGame();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [update]);

  const getGame = async () => {
    console.log("getGame");
    const gameID = match.params.id;
    try {
      const result = await API.graphql({
        query: getGameQuery,
        variables: {
          id: gameID,
        },
      });
      console.log("game", { result });
      const { id, description, master, name, players } = result.data.getGame;

      setLobby({
        id,
        master,
        name,
        description,
        players: players.items,
      });
      // setUpdate(false);
    } catch (error) {
      console.log(error);
      // setUpdate(false);
    }
  };

  const handleLeaveGame = async () => {
    console.log("handleLeaveGame");
    try {
      const input = {
        id: userId,
        userGameId: null,
      };
      const response = await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
      console.log("Join Game button", { response });
      history.replace(`/join`);
    } catch (error) {
      console.log(error);
    }
  };

  const displayPlayers = () => {
    return lobby.players.map((player, i) => {
      return (
        <div key={i} style={{ display: "flex" }}>
          <div style={{ paddingRight: "10px" }}>{player.name}</div>
          <button onClick={handleLeaveGame}>Leave Game</button>
        </div>
      );
    });
  };

  return (
    <div className="game-lobby page">
      <h1>Game Lobby</h1>
      <div>{`ID:`}</div>
      <div>{`${lobby.id}`}</div>
      <div>{`Name: ${lobby.name}`}</div>
      <div>{`Description: ${lobby.description}`}</div>
      <div>{`Game Master: ${lobby.master.name}`}</div>
      <div>{`Players:`}</div>
      <div>{displayPlayers()}</div>
    </div>
  );
};

export default GameLobby;
