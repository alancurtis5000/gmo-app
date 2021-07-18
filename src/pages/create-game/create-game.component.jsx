import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Button from "../../components/button/button.component";
import { newOnCreateGame, newOnDeleteGame } from "../../graphql/subscriptions";
import {
  createGame as createGameMutation,
  deleteGame as deleteGameMutation,
} from "../../graphql/mutations";
import { listGames as listGamesQuery } from "../../graphql/queries";

const initialFormState = {
  name: "",
  description: "",
  gameMaster: "",
  // players: [],
};

const CreateGame = () => {
  const [update, setUpdate] = useState(false);
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  let subscriptionOnCreate;
  let subscriptionOnDelete;

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
    try {
      const response = await API.graphql({
        query: createGameMutation,
        variables: { input: formData },
      });
      console.log("create button", { response });
      setUpdate(true);
      setFormData(initialFormState);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteGame(id) {
    try {
      const response = await API.graphql({
        query: deleteGameMutation,
        variables: { input: { id } },
      });
      console.log({ response });
      setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  }

  const setupSubscriptions = () => {
    subscriptionOnCreate = API.graphql(
      graphqlOperation(newOnCreateGame)
    ).subscribe({
      next: (gamesData) => {
        console.log("create sub", { gamesData });
        setUpdate(true);
      },
    });
    subscriptionOnDelete = API.graphql(
      graphqlOperation(newOnDeleteGame)
    ).subscribe({
      next: (gamesData) => {
        console.log("delete sub", { gamesData });
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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayGames = () => {
    return games.map((game, i) => {
      return (
        <div key={i} style={{ display: "flex" }}>
          <button
            style={{ marginRight: "5px" }}
            onClick={() => deleteGame(game.id)}
          >
            X
          </button>
          <div>{`${game.name}`}</div>
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
