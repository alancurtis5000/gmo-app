import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/not-found/not-found.component";
import Examples from "../pages/examples/examples.component";

const AppRouter = () => {
  return (
    <div className="app-content">
      <Switch>
        <Route exact path="/" component={Examples} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default AppRouter;
