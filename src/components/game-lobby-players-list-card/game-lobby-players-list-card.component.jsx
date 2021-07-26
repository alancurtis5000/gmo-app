import { useSelector } from "react-redux";
import SelectCharacter from "../select-character/select-character.component";
import ButtonLeaveLobby from "../button-leave-lobby/button-leave-lobby.component";
import CheckboxPlayerReady from "../checkbox-player-ready/checkbox-player-ready.component";

const GameLobbyPlayersListCard = (props) => {
  const { player } = props;
  const game = useSelector((state) => state.game);
  const userId = useSelector((state) => state.user.id);
  const isGameMaster = userId === game?.master?.id;

  const handleBootPlayer = () => {
    console.log("handleBootPlayer");
  };

  return (
    <div style={{ display: "flex" }}>
      {isGameMaster ? (
        <button
          variant="contained"
          color="primary"
          onClick={() => handleBootPlayer(player.id)}
        >
          Boot
        </button>
      ) : null}
      <div style={{ paddingRight: "10px" }}>{player.name}</div>
      <div style={{ paddingRight: "10px" }}>{player.playerName}</div>
      {player.id !== userId ? (
        <>
          <div>"Character"</div>
          <div>{player?.selectedCharacter?.details?.name}</div>
          <div>"Description"</div>
          <div>{player?.selectedCharacter?.content}</div>
        </>
      ) : null}
      {player.id === userId ? (
        <>
          <SelectCharacter disabled={player.isReady} />
          <ButtonLeaveLobby />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        </>
      ) : null}
      {player.id === userId ? (
        <>
          <CheckboxPlayerReady />
        </>
      ) : player.isReady ? (
        <div>Ready</div>
      ) : (
        <div>Not Ready</div>
      )}
    </div>
  );
};

export default GameLobbyPlayersListCard;
