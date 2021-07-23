import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
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
  const game = useSelector((state) => state.game);

  const [update, setUpdate] = useState(false);
  const isGameMaster = userId === game?.master?.id;
  const match = useRouteMatch();

  const getGame = () => {
    const id = match.params.id;
    if (id) {
      getGameRedux(id);
    }
  };

  const setupSubscriptions = () => {
    subscriptionOnUpdateUser = API.graphql(
      graphqlOperation(newOnUpdateUser)
    ).subscribe({
      next: () => {
        getGame();
      },
    });
    subscriptionOnDeleteGame = API.graphql(
      graphqlOperation(newOnDeleteGame)
    ).subscribe({
      next: () => {
        history.goBack();
      },
    });
    subscriptionOnUpdateGame = API.graphql(
      graphqlOperation(newOnUpdateGame)
    ).subscribe({
      next: (gameData) => {
        getGame();
        if (gameData?.value?.data?.newOnUpdateGame?.hasStarted) {
          const gameId = match.params.id;
          history.push(`/game/${gameId}`);
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

  useEffect(() => {
    if (update) {
      getGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  async function deleteGame() {
    try {
      await API.graphql({
        query: deleteGameMutation,
        variables: { input: { id: game.id } },
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
    const player = game?.players?.items.find((player) => player.id === userId);
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
    return game?.players?.items.map((player, i) => {
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
    const arePlayersReady = !game?.players?.items.find((player) => {
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
        id: game.id,
        hasStarted: true,
      };
      await API.graphql({
        query: updateGameMutation,
        variables: { input: input },
      });
      history.push(`/game/${game.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log({ props });

  return (
    <div className="game-lobby page">
      <h1>Game Lobby</h1>
      <div>{`ID:`}</div>

      <div>{`${game.id}`}</div>
      {isGameMaster ? (
        <button onClick={handleCancelGame}> Cancel Game </button>
      ) : null}

      <div>{`Name: ${game?.name}`}</div>
      <div>{`Description: ${game?.description}`}</div>
      <div>{`Game Master: ${game?.master?.name}`}</div>
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
