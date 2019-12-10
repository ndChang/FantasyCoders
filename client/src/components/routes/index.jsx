import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import TeamRoster from "../screens/TeamRoster";
import AvailableCoders from "../screens/AvailableCoders";
import SignUp from "../screens/SignUp";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/teamroster" component={TeamRoster} />
    <Route exact path="/availablecoders" component={AvailableCoders} />
    <Route exact path="/sign-up" component={SignUp} />
    <Route exact path="/sign-in" component={SignIn} />
  </Switch>
);

export default Routes