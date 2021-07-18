import { useEffect, useState } from "react";
import AppRouter from "./router/app-router";
import { Auth, API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createUser as createUserMutation } from "./graphql/mutations";
import { listUsersCustom as listUsersCustomQuery } from "./graphql/custom-queries";

const App = () => {
  const [userState, setUserState] = useState({});
  useEffect(() => {
    getCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function createUser(user) {
    try {
      const input = {
        name: user.username,
        userSub: user.attributes.sub,
      };
      await API.graphql({
        query: createUserMutation,
        variables: { input: input },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentUserInfo();
      setUserState(user);
      const userSub = user.attributes.sub;
      if (!(await doesUserExist(userSub))) {
        createUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const doesUserExist = async (userSub) => {
    try {
      const result = await API.graphql({
        query: listUsersCustomQuery,
        variables: {
          filter: {
            userSub: { eq: userSub },
          },
        },
      });
      console.log({ result });
      if (result.data.listUsers.items.length === 0) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {/* user name here for debuging remove later */}
      <div className="user">
        {userState.username}
        <AmplifySignOut />
      </div>
      <AppRouter />
    </div>
  );
};

export default withAuthenticator(App);
