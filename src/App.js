import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";
import PrivateRoute from './components/PrivateRoute';
import ToastList from "./components/ToastList";

function App() {
  return (
    <Fragment>
      <ToastList />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
