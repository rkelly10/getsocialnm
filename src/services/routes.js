import React from 'react';
import Parse from "parse";
import { Login } from '../pages/Login/index';
import Register from "../pages/Register/Register";
import Main from "../pages/Main/Main";

import { Route, Switch, Redirect } from 'react-router-dom';



export const Routes = () => {
  Parse.initialize("RWuLAUubjb1f4cMpz2ZY5SU3xuRPEvjxTdaI6qG0", "S15L9BsKvrSMAwfzVzFMEdaojts5ND9zgl0mnfE1");
  Parse.serverURL = "https://parseapi.back4app.com/";
  var isLoggedIn = Parse.User.current();

  return (
    <div>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Main" component={Main} />
      </Switch>
    </div>
  );
};