import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Button from "../../components/button/button.component";
import { newOnCreateGame } from "../../graphql/subscriptions";
import { createGame as createGameMutation } from "../../graphql/mutations";
import { listGames as listGamesQuery } from "../../graphql/queries";

const initialFormState = { name: "", description: "" };

const Home = () => {
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  let subscriptionOnCreate;

  const getAllGamesToState = async () => {
    const result = await API.graphql(graphqlOperation(listGamesQuery));
    console.log({ result });
    setGames(result.data.listGames.items);
  };

  useEffect(() => {
    getAllGamesToState();
  }, [games]);

  const setupSubscriptions = () => {
    // todo: this section does not match. gamesData should be a array of games? this may be causeing the flicker?
    subscriptionOnCreate = API.graphql(
      graphqlOperation(newOnCreateGame)
    ).subscribe({
      next: (gamesData) => {
        console.log({ gamesData });
        // setGames(gamesData);
        setGames([...games, gamesData.value.data.newOnCreateGame]);
      },
    });
  };

  useEffect(() => {
    setupSubscriptions();
    return () => {
      subscriptionOnCreate.unsubscribe();
    };
  }, []);

  async function createGame() {
    if (!formData.name || !formData.description) return;
    const response = await API.graphql({
      query: createGameMutation,
      variables: { input: formData },
    });
    console.log({ response });
    setGames([...games, response.data.createGame]);
    setFormData(initialFormState);
  }

  const joinGame = () => {
    console.log("joinGame");
  };

  // const createGame = () => {
  //   console.log("createGame");
  // };

  const displayGames = () => {
    return games.map((game, i) => {
      console.log(game);
      return <div key={i}>{`${game.name}`}</div>;
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
