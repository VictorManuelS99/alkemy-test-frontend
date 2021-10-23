import { Route, Switch } from "react-router";

import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { PrivateRoute } from "./PrivateRoute";

export const MainRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
