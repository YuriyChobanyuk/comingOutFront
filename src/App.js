import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Admin } from './pages/Admin';
import { Login } from './pages/Login';
import ToastList from './components/ToastList';

function App() {
  return (
    <BrowserRouter>
    <ToastList />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
