import React, { Fragment } from "react";
import Login from "./Signin";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import { Switch, Route } from "react-router-dom";
const Auth = ({ match }) => {
  return (
    <Fragment>
      <Switch>
        <Route path={`${match.path}/reset`} component={ChangePassword} />
        <Route path={`${match.path}/forgot`} component={ForgotPassword} />
        <Route path={`${match.path}/signup`} component={Signup} />
        <Route path={`${match.path}/login`} component={Login} />
      </Switch>
    </Fragment>
  );
};
export default Auth;
