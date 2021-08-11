import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { newOnUpdateCharacter } from "../../graphql/subscriptions";
import {
  setUserCharacter,
  getUserCharacterFromGame,
  updateUserCharacter,
} from "../../redux/user-character/user-character.actions";
import TextInput from "../../components/text-input/text-input.component";
import NumberInput from "../../components/number-input/number-input.component";
// on mount get game Id fetch relative user and selected characters in game

const PlayerLandingPage = () => {
  const userId = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.user.name);
  const character = useSelector((state) => state.userCharacter.data);
  const dispatch = useDispatch();
  let subscriptionOnUpdateCharacter;

  const getUserCharacter = () => {
    dispatch(getUserCharacterFromGame());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    setupSubscriptions();
    if (userId) {
      getUserCharacter();
    }
    return () => {
      subscriptionOnUpdateCharacter.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const setupSubscriptions = () => {
    subscriptionOnUpdateCharacter = API.graphql(
      graphqlOperation(newOnUpdateCharacter)
    ).subscribe({
      next: (result) => {
        const updatedCharacter = result.value.data.newOnUpdateCharacter;
        if (updatedCharacter.user.id === userId) {
          dispatch(setUserCharacter(updatedCharacter));
        }
      },
    });
  };

  const handleOnChange = (updatedcharacter) => {
    dispatch(updateUserCharacter(updatedcharacter));
  };

  return (
    <div className="page">
      Player Landing Page
      <div>{`user: ${userName}`}</div>
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
      <NumberInput
        label="Hit Points Current"
        value={character?.stats?.hitPoints?.current}
        onChange={(e) =>
          handleOnChange({
            ...character,
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
};

export default PlayerLandingPage;
