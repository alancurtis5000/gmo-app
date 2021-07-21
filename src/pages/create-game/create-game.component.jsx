import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Button from "../../components/button/button.component";
import {
  newOnCreateGame,
  newOnDeleteGame,
  newOnUpdateGame,
} from "../../graphql/subscriptions";
import {
  createGame as createGameMutation,
  deleteGame as deleteGameMutation,
} from "../../graphql/mutations";
import { listGames as listGamesQuery } from "../../graphql/queries";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const initialFormState = {
  name: "",
  description: "",
  gameMaster: "",
  // players: [],
};

const CreateGame = () => {
  const history = useHistory();
  const [update, setUpdate] = useState(false);
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const gameMaster = useSelector((state) => state.user.id);

  let subscriptionOnCreate;
  let subscriptionOnDelete;
  let subscriptionOnUpdate;

  const getAllGamesToState = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listGamesQuery));
      setGames(result.data.listGames.items);
      setUpdate(false);
    } catch (error) {
      console.log(error);
      setUpdate(false);
    }
  };

  useEffect(() => {
    if (update) {
      getAllGamesToState();
    }
  }, [update]);

  async function createGame() {
    if (!formData.name || !formData.description) return;
    const input = {
      name: formData.name,
      description: formData.description,
      gameMasterId: gameMaster,
    };
    try {
      const response = await API.graphql({
        query: createGameMutation,
        variables: { input: input },
      });
      setFormData(initialFormState);
      const gameID = response.data.createGame.id;
      history.push(`/game-lobby/${gameID}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteGame(id) {
    try {
      await API.graphql({
        query: deleteGameMutation,
        variables: { input: { id } },
      });

      setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  }

  const setupSubscriptions = () => {
    subscriptionOnCreate = API.graphql(
      graphqlOperation(newOnCreateGame)
    ).subscribe({
      next: () => {
        setUpdate(true);
      },
    });
    subscriptionOnDelete = API.graphql(
      graphqlOperation(newOnDeleteGame)
    ).subscribe({
      next: () => {
        setUpdate(true);
      },
    });
    subscriptionOnUpdate = API.graphql(
      graphqlOperation(newOnUpdateGame)
    ).subscribe({
      next: () => {
        // object that gets return
        // next: (gameObject) => { do action }
        setUpdate(true);
      },
    });
  };

  useEffect(() => {
    setupSubscriptions();
    getAllGamesToState();
    return () => {
      subscriptionOnCreate.unsubscribe();
      subscriptionOnDelete.unsubscribe();
      subscriptionOnUpdate.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayGames = () => {
    return games.map((game, i) => {
      return (
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>{`game name: `}</h5>
            <div>{`${game.name}`}</div>
            <button
              style={{ marginRight: "5px" }}
              onClick={() => deleteGame(game.id)}
            >
              X
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ paddingRight: "10px" }}>{`game code:`}</h5>
            <div>{`${game.id}`}</div>
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ paddingRight: "10px" }}>{`game Master:`}</h5>
            <div>{`${game.master.name}`}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="create-game page">
      <h1>Create Game</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Note description"
        value={formData.description}
      />
      <Button text="Create" onClick={createGame} />
      <div>{displayGames()}</div>
    </div>
  );
};

export default CreateGame;
