import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from '../services/auth.service';
import { Location } from 'history';

interface Props {
  children: JSX.Element
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }: {location: Location}) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;