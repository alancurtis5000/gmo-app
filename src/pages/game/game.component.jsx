// split here each player see's their stats
// game master sees their page.
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getGameLobbyById as getGameLobbyByIdQuery } from "../../graphql/custom-queries";
import { useRouteMatch } from "react-router-dom";
import { API } from "aws-amplify";
import PlayerLandingPage from "../player-landing/player-landing.component";
import PlayerCharacterPage from "../player-character/player-character.component";
import GameMasterLandingPage from "../game-master-landing/game-master-landing.component";
import GameMasterCharactersPage from "../game-master-characters/game-master-characters.component";

const Game = () => {
  const userId = useSelector((state) => state.user.id);
  const match = useRouteMatch();
  const [game, setGame] = useState({});

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
      setGame({
        id,
        master,
        name,
        description,
        players: players.items,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isGameMaster = userId === game?.master?.id;

  return (
    <div className="game page">
      <h1>Game</h1>
      {isGameMaster ? <GameMasterCharactersPage /> : <PlayerCharacterPage />}
    </div>
  );
};

export default Game;
