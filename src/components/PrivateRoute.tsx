import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth.service";
import { Location } from "history";
import { userRole } from "../models/user.model";

interface Props {
  children: JSX.Element;
  role: userRole | userRole[];
}

const PrivateRoute: React.FC<Props> = ({ children, role, ...rest }) => {

  const isAuth = isAuthenticated(role);

  return (
    <Route
      {...rest}
      render={({ location }: { location: Location }) =>
        isAuth ? (
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
};

export default PrivateRoute;
