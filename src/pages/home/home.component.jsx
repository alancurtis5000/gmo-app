import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Button from "../../components/button/button.component";
import { newOnCreateGame, newOnDeleteGame } from "../../graphql/subscriptions";
import {
  createGame as createGameMutation,
  deleteGame as deleteGameMutation,
} from "../../graphql/mutations";
import { listGames as listGamesQuery } from "../../graphql/queries";

const initialFormState = { name: "", description: "" };

//Todo: null if you click fast on deleting games.

const Home = () => {
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  let subscriptionOnCreate;
  let subscriptionOnDelete;

  const getAllGamesToState = async () => {
    const result = await API.graphql(graphqlOperation(listGamesQuery));
    console.log({ result });
    // Todo: avoid this infinite render loop.
    if (games.length !== result.data.listGames.items.length) {
      setGames(result.data.listGames.items);
    }
  };

  useEffect(() => {
    // Todo: avoid this infinite render loop.
    getAllGamesToState();
  }, [games]);

  const setupSubscriptions = () => {
    subscriptionOnCreate = API.graphql(
      graphqlOperation(newOnCreateGame)
    ).subscribe({
      next: (gamesData) => {
        console.log({ gamesData });
        // Todo: avoid this infinite render loop.
        getAllGamesToState();
      },
    });
    subscriptionOnDelete = API.graphql(
      graphqlOperation(newOnDeleteGame)
    ).subscribe({
      next: (gamesData) => {
        console.log({ gamesData });
        // Todo: avoid this infinite render loop.
        getAllGamesToState();
      },
    });
  };

  useEffect(() => {
    setupSubscriptions();
    return () => {
      subscriptionOnCreate.unsubscribe();
      subscriptionOnDelete.unsubscribe();
    };
  }, []);

  async function createGame() {
    if (!formData.name || !formData.description) return;
    const response = await API.graphql({
      query: createGameMutation,
      variables: { input: formData },
    });
    console.log({ response });
    // Todo: avoid this infinite render loop.
    // setGames([...games, response.data.createGame]);
    setFormData(initialFormState);
  }

  async function deleteGame(id) {
    console.log("deleteGame", id);
    const response = await API.graphql({
      query: deleteGameMutation,
      variables: { input: { id } },
    });
    console.log({ response });
    getAllGamesToState();
    // Todo: avoid this infinite render loop.
    setGames([...games, response.data.deleteGame]);
  }

  const joinGame = () => {
    console.log("joinGame");
  };

  const displayGames = () => {
    return games.map((game, i) => {
      console.log(game);
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
    <div className="home page">
      <h1>home</h1>
      <Button text="Join" onClick={joinGame} />
      {/* create game */}
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

export default Home;
