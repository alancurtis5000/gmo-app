import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedCharacterByUserId as getSelectedCharacterByUserIdQuery } from "../../graphql/custom-queries";
import { API, graphqlOperation } from "aws-amplify";
import { newOnUpdateCharacter } from "../../graphql/subscriptions";
import { updateUserCharacterLocal } from "../../redux/user-character/user-character.actions";

// on mount get game Id fetch relative user and selected characters in game

const PlayerLandingPage = () => {
  const userId = useSelector((state) => state.user.id);
  // todo: connect to redux instead of local state!
  const dispatch = useDispatch();
  const [character, setCharacter] = useState({});
  let subscriptionOnUpdateCharacter;

  const getSelectedCharacter = async () => {
    try {
      const result = await API.graphql({
        query: getSelectedCharacterByUserIdQuery,
        variables: {
          id: userId,
        },
      });
      console.log(result.data);
      setCharacter(result.data.getUser.selectedCharacter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setupSubscriptions();
    if (userId) {
      getSelectedCharacter();
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
        console.log({ result });
        setCharacter(result.value.data.newOnUpdateCharacter);
      },
    });
  };

  return (
    <div className="page">
      Player Landing Page
      <div>Name</div>
      <div>{character?.details?.name}</div>
      <div>hp</div>
      <div>{character?.stats?.hitPoints?.current}</div>
    </div>
  );
};

export default PlayerLandingPage;
