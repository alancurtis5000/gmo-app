import { useHistory /*useLocation */ } from "react-router";
import { useSelector } from "react-redux";
// import { Auth, API } from "aws-amplify";
// import { updateUser as updateUserMutation } from "../../graphql/mutations";
const Header = (props) => {
  const { title } = props;
  const user = useSelector((state) => state.user.name);
  // const userRedux = useSelector((state) => state.user);
  const history = useHistory();
  // const location = useLocation();
  const handleBack = () => {
    history.goBack();
  };

  // todo: what happens when gamemaster signs out during game.
  // todo: what happens when game player signs out during game.
  /*

  const handleLeaveGame = async () => {
    try {
      const input = {
        id: userRedux.id,
        userGameId: null,
        isReady: false,
      };
      await API.graphql({
        query: updateUserMutation,
        variables: { input: input },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
      await handleLeaveGame();
      history.push("/");
      window.location.href("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const closeApp = () => {
    //Todo: close app button.
    console.log({ history, location });
    // history.replace("/");
    // window.close();
  };
  */

  return (
    <div className="header">
      <button onClick={handleBack}>{"<"}</button>
      <h3>{title}</h3>
      {/* <button onClick={signOut}>Sign Out</button>
      <button onClick={closeApp}>Exit</button> */}
      <h3>{user}</h3>
    </div>
  );
};

export default Header;
