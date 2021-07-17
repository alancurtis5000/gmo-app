import { useEffect, useState } from "react";
import AppRouter from "./router/app-router";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Button from "./components/button/button.component";
import { createUser as createUserMutation } from "./graphql/mutations";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getCurrentUser();
  }, []);

  async function createUser(user) {
    try {
      const input = {
        name: user.username,
        userSub: user.attributes.sub,
      };
      const response = await API.graphql({
        query: createUserMutation,
        variables: { input: input },
      });
      console.log("create user button", { response });
    } catch (error) {
      console.log(error);
    }
  }

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentUserInfo();
      console.log(user);
      setUser(user);
      // check if user exist in database
      // if no create one
      // createUser(user);
      // if yes do nothing.
    } catch (error) {
      console.log(error);
    }
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
