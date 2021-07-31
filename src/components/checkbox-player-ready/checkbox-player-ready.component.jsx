import Checkbox from "../checkbox/checkbox.component";
import { API } from "aws-amplify";
import { updateUser as updateUserMutation } from "../../graphql/mutations";
import { useSelector } from "react-redux";

const CheckboxPlayerReady = () => {
  const userId = useSelector((state) => state.user.id);
  const game = useSelector((state) => state.game.data);
  const player = game?.players?.items.find((player) => player.id === userId);
  const isChecked = !!player?.isReady;
  const disabled = player?.id !== userId;

  const handleIsReady = async () => {
    if (!player.selectedCharacter && !player.isReady) {
      alert("You need to select a character first.");
      return;
    }
    try {
      const input = {
        id: userId,
        isReady: !player.isReady,
      };
      await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Checkbox
      label="Ready"
      onChange={handleIsReady}
      id="player-ready"
      checked={isChecked}
      disabled={disabled}
    />
  );
};

export default CheckboxPlayerReady;
