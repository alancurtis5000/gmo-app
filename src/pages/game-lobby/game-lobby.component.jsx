import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { getGameLobbyById as getGameLobbyByIdQuery } from "../../graphql/custom-queries";
import {
  newOnUpdateUser,
  newOnDeleteGame,
  newOnUpdateGame,
} from "../../graphql/subscriptions";
import {
  updateUser as updateUserMutation,
  updateGame as updateGameMutation,
  deleteGame as deleteGameMutation,
} from "../../graphql/mutations";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import SelectCharacter from "../../components/select-character/select-character.component";
import { connect } from "react-redux";
import { getGame as getGameRedux } from "../../redux/game/game.actions";

const GameLobby = (props) => {
  const { getGameRedux } = props;
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
      next: (gameData) => {
        setUpdate(true);
        if (gameData?.value?.data?.newOnUpdateGame?.hasStarted) {
          const gameID = match.params.id;
          history.push(`/game/${gameID}`);
        }
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
    getGameRedux(gameID);
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
        userSelectedCharacterId: null,
        isReady: false,
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
  const handleIsReady = async () => {
    const player = lobby?.players?.find((player) => player.id === userId);
    if (!player.selectedCharacter) {
      alert("You need to select a character first.");
      return;
    }
    try {
      const input = {
        id: userId,
        isReady: !player.isReady,
      };
      await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
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
              <SelectCharacter disabled={player.isReady} />
              <button
                onClick={() => handleLeaveGame(player.id)}
                style={{ marginRight: "10px" }}
              >
                Leave Game
              </button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
            </>
          ) : null}
          <input
            type="checkbox"
            id="playerReady"
            name="playerReady"
            style={{ marginRight: "10px" }}
            checked={player.isReady}
            disabled={userId !== player.id}
            onClick={handleIsReady}
          />
          <label htmlFor="playerReady"> ready </label>
        </div>
      );
    });
  };

  const handleCancelGame = () => {
    deleteGame();
  };

  const validateGameIsReady = () => {
    const arePlayersReady = !lobby.players.find((player) => {
      if (player.isReady === false) {
        return player;
      }
      return false;
    });
    if (arePlayersReady) {
      handleStartGame();
    }
  };

  const handleStartGame = async () => {
    try {
      const input = {
        id: lobby.id,
        hasStarted: true,
      };
      await API.graphql({
        query: updateGameMutation,
        variables: { input: input },
      });
      history.push(`/game/${lobby.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log({ props });

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
      {isGameMaster ? (
        <button onClick={validateGameIsReady}> Start Game </button>
      ) : null}
      <div>{`Players:`}</div>
      <div>{displayPlayers()}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getGameRedux: (id) => dispatch(getGameRedux(id)),
});

export default connect(null, mapDispatchToProps)(GameLobby);
