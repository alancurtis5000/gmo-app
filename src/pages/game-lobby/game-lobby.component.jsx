import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import {
  newOnUpdateUser,
  newOnDeleteGame,
  newOnUpdateGame,
} from "../../graphql/subscriptions";
import {
  updateGame as updateGameMutation,
  deleteGame as deleteGameMutation,
  updateUser as updateUserMutation,
} from "../../graphql/mutations";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getGame as getGameRedux } from "../../redux/game/game.actions";
import GameLobbyPlayersList from "../../components/game-lobby-players-list/game-lobby-players-list.component";

const GameLobby = (props) => {
  const { getGameRedux } = props;
  let subscriptionOnUpdateUser;
  let subscriptionOnUpdateGame;
  let subscriptionOnDeleteGame;

  const history = useHistory();
  const userId = useSelector((state) => state.user.id);
  const game = useSelector((state) => state.game.data);

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

  const setIsReadyToFalse = async () => {
    try {
      const input = {
        id: userId,
        isReady: false,
      };
      await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setupSubscriptions();
    setIsReadyToFalse();
    getGame();
    return () => {
      subscriptionOnUpdateUser.unsubscribe();
      subscriptionOnUpdateGame.unsubscribe();
      subscriptionOnDeleteGame.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function deleteGame() {
    try {
      await API.graphql({
        query: deleteGameMutation,
        variables: { input: { id: game.id } },
      });
    } catch (error) {
      console.log(error);
    }
  }

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
      <GameLobbyPlayersList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getGameRedux: (id) => dispatch(getGameRedux(id)),
});

export default connect(null, mapDispatchToProps)(GameLobby);
