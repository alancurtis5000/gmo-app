import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { newOnUpdateCharacter } from "../../graphql/subscriptions";
import {
  setUserCharacter,
  getUserCharacterFromGame,
  updateUserCharacter,
  updateUserCharacterLocal,
} from "../../redux/user-character/user-character.actions";
import TextInput from "../../components/text-input/text-input.component";
import Button from "../../components/button/button.component";
import debounce from "lodash/debounce";
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

  const debounceApiCall = useCallback(
    debounce((updatedSelectedCharacter) => {
      dispatch(updateUserCharacter(updatedSelectedCharacter));
    }, 600),
    []
  );

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
        if (updatedCharacter.user.id === userId) {
          dispatch(setUserCharacter(updatedCharacter));
        }
      },
    });
  };

  const handleOnChange = (detail) => {
    const update = {
      details: {
        ...character.details,
        ...detail,
      },
    };
    dispatch(updateUserCharacterLocal(update));
    debounceApiCall(update);
  };

  const handleSave = () => {
    console.log("handleSave");
    dispatch(updateUserCharacter());
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
            name: e.target.value,
          })
        }
      />
      <Button text="Save" onClick={handleSave} />
      <div>hp</div>
      <div>{character?.stats?.hitPoints?.current}</div>
    </div>
  );
};

export default PlayerLandingPage;
