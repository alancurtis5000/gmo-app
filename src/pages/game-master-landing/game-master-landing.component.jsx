import { useSelector, useDispatch } from "react-redux";
import TextInput from "../../components/text-input/text-input.component";
import { updateUserCharacter } from "../../redux/user-character/user-character.actions";
import { getGameForMaster } from "../../redux/game/game.actions";
import { useEffect } from "react";

const GameMasterLandingPage = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);

  const handleOnChange = (characterUpdate) => {
    const findPlayer = game.data.players.items.find(
      (xCharacter) => (xCharacter.id = characterUpdate.id)
    );
    const selectedCharacter = findPlayer?.selectedCharacter;
    const updatedSelectedCharacter = {
      ...selectedCharacter,
      details: {
        ...selectedCharacter.details,
        ...characterUpdate.detail,
      },
    };
    dispatch(updateUserCharacter(updatedSelectedCharacter));
  };

  useEffect(() => {
    console.log({ gmi: game.data.id });
    if (game.data.id) {
      dispatch(getGameForMaster(game.data.id));
    }
  }, [dispatch, game.id]);

  const renderCharacters = () => {
    return game?.data?.players?.items.map((player, i) => {
      let character = player.selectedCharacter;
      return (
        <div key={i}>
          <div>Name</div>
          <div>{character?.details?.name}</div>
          <TextInput
            label="Character Name"
            value={character?.details?.name}
            // error="don't do it"
            onChange={(e) =>
              handleOnChange({
                id: character.id,
                detail: { name: e.target.value },
              })
            }
          />
        </div>
      );
    });
  };

  return (
    <div className="page">
      Game master Landing
      {renderCharacters()}
    </div>
  );
};

export default GameMasterLandingPage;
