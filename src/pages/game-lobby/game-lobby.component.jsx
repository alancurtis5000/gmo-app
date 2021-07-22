import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { getGameLobbyById as getGameLobbyByIdQuery } from "../../graphql/custom-queries";
import {
  newOnUpdateUser,
  newOnDeleteGame,
  newOnUpdateGame,
} from "../../graphql/subscriptions";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteGame as deleteGameMutation } from "../../graphql/mutations";
import Button from "@material-ui/core/Button";
import SelectCharacter from "../../components/select-character/select-character.component";

const GameLobby = () => {
  let subscriptionOnUpdateUser;
  let subscriptionOnUpdateGame;
  let subscriptionOnDeleteGame;

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
  const isGameMaster = userId === lobby.master.id;

  const setupSubscriptions = () => {
    subscriptionOnUpdateUser = API.graphql(
      graphqlOperation(newOnUpdateUser)
    ).subscribe({
      next: () => {
        setUpdate(true);
      },
    });
    subscriptionOnDeleteGame = API.graphql(
      graphqlOperation(newOnDeleteGame)
    ).subscribe({
      next: () => {
        history.goBack();
        setUpdate(true);
      },
    });
    subscriptionOnUpdateGame = API.graphql(
      graphqlOperation(newOnUpdateGame)
    ).subscribe({
      next: () => {
        setUpdate(true);
      },
    });
  };

  useEffect(() => {
    setupSubscriptions();
    getGame();
    return () => {
      subscriptionOnUpdateUser.unsubscribe();
      subscriptionOnUpdateGame.unsubscribe();
      subscriptionOnDeleteGame.unsubscribe();
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
    const gameID = match.params.id;
    try {
      const result = await API.graphql({
        query: getGameLobbyByIdQuery,
        variables: {
          id: gameID,
        },
      });
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
      await API.graphql({
        query: deleteGameMutation,
        variables: { input: { id: lobby.id } },
      });
      setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLeaveGame = async (id) => {
    // Todo: need to handle boot player, so their screen goes back to join game.
    try {
      const input = {
        id: id,
        userGameId: null,
      };
      await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
      history.replace(`/join`);
    } catch (error) {
      console.log(error);
    }
  };

  const displayPlayers = () => {
    return lobby.players.map((player, i) => {
      return (
        <div key={i} style={{ display: "flex" }}>
          {isGameMaster ? (
            <button
              variant="contained"
              color="primary"
              onClick={() => handleLeaveGame(player.id)}
            >
              Boot
            </button>
          ) : null}
          <div style={{ paddingRight: "10px" }}>{player.name}</div>
          <div style={{ paddingRight: "10px" }}>{player.playerName}</div>
          {player.id !== userId ? (
            <>
              <div>"Character"</div>
              <div>{player?.selectedCharacter?.name}</div>
              <div>"Description"</div>
              <div>{player?.selectedCharacter?.content}</div>
            </>
          ) : null}
          {player.id === userId ? (
            <>
              <SelectCharacter />
              <button onClick={() => handleLeaveGame(player.id)}>
                Leave Game
              </button>
            </>
          ) : null}
        </div>
      );
    });
  };

  const handleCancelGame = () => {
    deleteGame();
  };

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
