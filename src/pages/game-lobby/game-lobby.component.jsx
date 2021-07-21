import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { getGame as getGameQuery } from "../../graphql/queries";
import { newOnUpdateUser, newOnDeleteGame } from "../../graphql/subscriptions";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteGame as deleteGameMutation } from "../../graphql/mutations";
import Button from "@material-ui/core/Button";
import SelectCharacter from "../../components/select-character/select-character.component";

const GameLobby = () => {
  //Todo: remove me redeploy note
  let subscriptionOnUpdate;
  let subscriptionOnDelete;
  const history = useHistory();
  const userId = useSelector((state) => state.user.id);
  const [update, setUpdate] = useState(false);
  const [lobby, setLobby] = useState({
    id: "",
    master: "",
    name: "",
    description: "",
    players: [],
  });

  const setupSubscriptions = () => {
    subscriptionOnUpdate = API.graphql(
      graphqlOperation(newOnUpdateUser)
    ).subscribe({
      next: (userData) => {
        console.log("update sub", { userData });
        setUpdate(true);
      },
    });
    subscriptionOnDelete = API.graphql(
      graphqlOperation(newOnDeleteGame)
    ).subscribe({
      next: (userData) => {
        console.log("deletGame sub", { userData });
        history.goBack();
        setUpdate(true);
      },
    });
  };

  useEffect(() => {
    setupSubscriptions();
    getGame();
    return () => {
      subscriptionOnUpdate.unsubscribe();
      subscriptionOnDelete.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Todo: add subscriptions to game update, when players join.
  const match = useRouteMatch();
  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (update) {
      getGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

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
      setUpdate(false);
    } catch (error) {
      console.log(error);
      setUpdate(false);
    }
  };

  async function deleteGame() {
    try {
      const response = await API.graphql({
        query: deleteGameMutation,
        variables: { input: { id: lobby.id } },
      });
      console.log({ response });
      setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  }

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
      console.log({ player });
      if (player.id === userId) {
      }
      return (
        <div key={i} style={{ display: "flex" }}>
          <div style={{ paddingRight: "10px" }}>{player.name}</div>
          <div style={{ paddingRight: "10px" }}>{player.playerName}</div>

          {player.id === userId ? (
            <>
              <SelectCharacter />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLeaveGame}
              >
                Leave Game
              </Button>
            </>
          ) : null}
        </div>
      );
    });
  };

  const handleCancelGame = () => {
    console.log("handleCancelGame");
    deleteGame();
  };

  const isGameMaster = userId === lobby.master.id;

  return (
    <div className="game-lobby page">
      <h1>Game Lobby</h1>
      <div>{`ID:`}</div>

      <div>{`${lobby.id}`}</div>
      {isGameMaster ? (
        <button onClick={handleCancelGame}> Cancel Game </button>
      ) : null}
      <div>{`Name: ${lobby.name}`}</div>
      <div>{`Description: ${lobby.description}`}</div>
      <div>{`Game Master: ${lobby.master.name}`}</div>
      <div>{`Players:`}</div>
      <div>{displayPlayers()}</div>
    </div>
  );
};

export default GameLobby;
