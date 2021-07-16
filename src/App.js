import { useEffect } from "react";
import AppRouter from "./router/app-router";

import { withAuthenticator } from "@aws-amplify/ui-react";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default withAuthenticator(App);
