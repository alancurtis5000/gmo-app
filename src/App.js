import { useEffect, useState } from "react";
import AppRouter from "./router/app-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const user = await Auth.currentUserInfo();
    console.log(user);
    setUser(user);
  };
  return (
    <div className="App">
      {/* user name here for debuging remove later */}
      <div className="user">{user.username}</div>
      <AppRouter />
    </div>
  );
};

export default withAuthenticator(App);
