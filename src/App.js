import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import ToastList from "./components/ToastList";
import { Navigation } from "./components/Navigation";
import { ModalContainer } from "./components/ModalContainer";
import { checkTokenExp } from "./services/auth.service";

function App() {
  useEffect(() => {
    checkTokenExp();
  }, []);

  return (
    <Fragment>
      <ToastList />
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute role="ADMIN" path="/admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute role={["ADMIN", "USER"]} path="/user">
          <User />
        </PrivateRoute>
      </Switch>
      <ModalContainer />
    </Fragment>
  );
}

export default App;
