import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextInput from "../../components/text-input/text-input.component";
import NumberInput from "../../components/number-input/number-input.component";
import debounce from "lodash/debounce";
import {
  getGameForMaster,
  updateGameCharacter,
  updateGameCharacterLocal,
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
  // Todo Updates once but then never again.

  const debounceApiCall = useCallback(
    debounce((updatedSelectedCharacter) => {
      dispatch(updateGameCharacter(updatedSelectedCharacter));
    }, 600),
    []
  );

  const handleOnChange = (characterUpdate) => {
    const findPlayer = game.data.players.items.find(
      (xCharacter) => (xCharacter.id = characterUpdate.id)
    );
    const selectedCharacter = findPlayer?.selectedCharacter;
    const updatedSelectedCharacter = {
      ...selectedCharacter,
      id: characterUpdate.id,
      details: {
        ...selectedCharacter.details,
        ...characterUpdate.detail,
      },
    };
    // dispatch(updateGameCharacter(updatedSelectedCharacter));
    dispatch(updateGameCharacterLocal(updatedSelectedCharacter));
    debounceApiCall(updatedSelectedCharacter);
  };

  const handleOnHpChange = (characterUpdate) => {
    const findPlayer = game.data.players.items.find(
      (xCharacter) => (xCharacter.id = characterUpdate.id)
    );

    const selectedCharacter = findPlayer?.selectedCharacter;
    console.log({ characterUpdate, selectedCharacter });
    const updatedSelectedCharacter = {
      ...selectedCharacter,
      id: characterUpdate.id,
      stats: characterUpdate.stats,
    };
    dispatch(updateGameCharacter(updatedSelectedCharacter));
  };

  const setupSubscriptions = () => {
    subscriptionOnUpdateCharacter = API.graphql(
      graphqlOperation(newOnUpdateCharacter)
    ).subscribe({
      next: (result) => {
        console.log({ result });
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
  }, [dispatch, game.id]);

  const renderCharacters = () => {
    return game?.data?.players?.items.map((player, i) => {
      let character = player.selectedCharacter;
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
                id: character.id,
                detail: { name: e.target.value },
              })
            }
          />
          <div>hp</div>
          <div>{character?.stats?.hitPoints?.current}</div>
          <NumberInput
            label="Hit Points Current"
            value={character?.stats?.hitPoints?.current}
            onChange={(e) =>
              handleOnHpChange({
                id: character.id,
                stats: {
                  ...character.stats,
                  hitPoints: {
                    ...character.stats.hitPoints,
                    current: e.target.value,
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
