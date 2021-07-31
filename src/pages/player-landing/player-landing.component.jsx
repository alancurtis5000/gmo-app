import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSelectedCharacterByUserId as getSelectedCharacterByUserIdQuery } from "../../graphql/custom-queries";
import { API } from "aws-amplify";

const PlayerLandingPage = () => {
  const userId = useSelector((state) => state.user.id);
  const [character, setCharacter] = useState({});
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
    getSelectedCharacter();
  }, []);

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
