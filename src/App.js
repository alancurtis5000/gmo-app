import { useEffect } from "react";
import AppRouter from "./router/app-router";
import { Auth, API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createUser as createUserMutation } from "./graphql/mutations";
import { listUsersCustom as listUsersCustomQuery } from "./graphql/custom-queries";
import { useDispatch, useSelector } from "react-redux";

import { userAdd } from "./redux/user/user.actions";

const App = () => {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user);

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
      const user = await API.graphql({
        query: createUserMutation,
        variables: { input: input },
      });
      dispatch(userAdd(user));
    } catch (error) {
      console.log(error);
    }
  }

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentUserInfo();
      const userSub = user.attributes.sub;
      if (!(await doesUserExist(userSub))) {
        createUser(user);
      } else {
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
        dispatch(userAdd(result.data.listUsers.items[0]));
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
        {userRedux.username}
        <button onClick={() => console.log(userRedux)}>logProps</button>
        <AmplifySignOut />
      </div>
      <AppRouter />
    </div>
  );
};

export default withAuthenticator(App);
