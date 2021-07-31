import { useSelector } from "react-redux";

import GameLobbyPlayersListCard from "../game-lobby-players-list-card/game-lobby-players-list-card.component";

const GameLobbyPlayersList = () => {
  const game = useSelector((state) => state?.game?.data);

  const displayPlayers = () => {
    return game?.players?.items.map((player) => {
      return <GameLobbyPlayersListCard key={player?.id} player={player} />;
    });
  };
  return <div>{displayPlayers()}</div>;
};

export default GameLobbyPlayersList;
