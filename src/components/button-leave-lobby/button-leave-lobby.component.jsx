import Button from "../button/button.component";
import { API } from "aws-amplify";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const ButtonLeaveLobby = () => {
  const userId = useSelector((state) => state.user.id);
  const history = useHistory();
  const handleLeaveGame = async () => {
    try {
      const input = {
        id: userId,
        userGameId: null,
        userSelectedCharacterId: null,
        isReady: false,
      };
      await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
      history.replace(`/join`);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={handleLeaveGame} text="Leave" />;
};

export default ButtonLeaveLobby;
