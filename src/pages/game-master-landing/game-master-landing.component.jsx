import { useSelector, useDispatch } from "react-redux";
import TextInput from "../../components/text-input/text-input.component";
import InputNumber from "../../components/input-number/input-number.component";
import {
  getGameForMaster,
  updateGameCharacter,
} from "../../redux/game/game.actions";
import { useEffect } from "react";
import {
  newOnUpdateCharacter,
  newOnUpdateGame,
} from "../../graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";

const GameMasterLandingPage = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  let subscriptionOnUpdateCharacter;
  let subscriptionOnUpdateGame;

  const handleOnChange = (characterUpdate) => {
    dispatch(updateGameCharacter(characterUpdate));
  };

  const setupSubscriptions = () => {
    subscriptionOnUpdateCharacter = API.graphql(
      graphqlOperation(newOnUpdateCharacter)
    ).subscribe({
      next: (result) => {
        dispatch(getGameForMaster(game.data.id));
        // setCharacter(result.value.data.newOnUpdateCharacter);
      },
    });
    subscriptionOnUpdateGame = API.graphql(
      graphqlOperation(newOnUpdateGame)
    ).subscribe({
      next: (result) => {
        console.log("GameUpdated: ", { result });
        // dispatch(getGameForMaster(game.data.id));
        // setCharacter(result.value.data.newOnUpdateCharacter);
      },
    });
  };

  useEffect(() => {
    setupSubscriptions();
    if (game.data.id) {
      dispatch(getGameForMaster(game.data.id));
    }
    return () => {
      subscriptionOnUpdateCharacter.unsubscribe();
      subscriptionOnUpdateGame.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, game.id]);

  const renderCharacters = () => {
    return game?.data?.players?.items.map((player, i) => {
      const character = player.selectedCharacter;
      return (
        <div key={i}>
          <div>id: {character.id}</div>
          <div>Name</div>
          <div>{character?.details?.name}</div>
          <TextInput
            label="Character Name"
            value={character?.details?.name}
            // error="don't do it"
            onChange={(e) =>
              handleOnChange({
                ...character,
                details: { name: e.target.value },
              })
            }
          />
          <div>hp</div>
          <InputNumber
            label="Hit Points Current"
            value={character?.stats?.hitPoints?.current}
            onChange={(e) =>
              handleOnChange({
                ...character,
                stats: {
                  ...character.stats,
                  hitPoints: {
                    ...character.stats.hitPoints,
                    current: e.target.value * 1,
                  },
                },
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
