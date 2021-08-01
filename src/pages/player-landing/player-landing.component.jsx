import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { newOnUpdateCharacter } from "../../graphql/subscriptions";
import {
  setUserCharacter,
  getUserCharacterFromGame,
} from "../../redux/user-character/user-character.actions";
import TextInput from "../../components/text-input/text-input.component";

// on mount get game Id fetch relative user and selected characters in game

const PlayerLandingPage = () => {
  const userId = useSelector((state) => state.user.id);
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();
  let subscriptionOnUpdateCharacter;

  const getUserCharacter = () => {
    dispatch(getUserCharacterFromGame());
  };

  useEffect(() => {
    setupSubscriptions();
    if (userId) {
      getUserCharacter();
    }
    return () => {
      subscriptionOnUpdateCharacter.unsubscribe();
    };
  }, [userId]);

  const setupSubscriptions = () => {
    subscriptionOnUpdateCharacter = API.graphql(
      graphqlOperation(newOnUpdateCharacter)
    ).subscribe({
      next: (result) => {
        const updatedCharacter = result.value.data.newOnUpdateCharacter;
        dispatch(setUserCharacter(updatedCharacter));
      },
    });
  };

  const handleOnChange = (characterUpdate) => {
    console.log({ characterUpdate });
    // const findPlayer = game.data.players.items.find(
    //   (xCharacter) => (xCharacter.id = characterUpdate.id)
    // );
    // const selectedCharacter = findPlayer?.selectedCharacter;
    // const updatedSelectedCharacter = {
    //   ...selectedCharacter,
    //   details: {
    //     ...selectedCharacter.details,
    //     ...characterUpdate.detail,
    //   },
    // };
    // dispatch(updateUserCharacter(updatedSelectedCharacter));
  };

  return (
    <div className="page">
      Player Landing Page
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
    </div>
  );
};

export default PlayerLandingPage;
