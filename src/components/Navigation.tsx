import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { routesList } from "../helpers/routesPath";
import { UserControl } from "./UserControl";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { UserModel } from "../models/user.model";

export const Navigation: React.FC = () => {
  const [routes, setRoutes] = useState<{ name: string; path: string }[]>([]);
  const [root, setRoot] = useState("root");

  const location = useLocation();
  const user = useSelector<RootState, UserModel | null>(
    state => state.userReducer.user
  );

  useEffect(() => {

    const localRoot = location.pathname.split("/")[1] || "root";
    setRoot(localRoot);

    const routeRole = user ? user.role : 'undef';

    switch (routeRole) {
      case "ADMIN":
        setRoutes(routesList.adminRoutes);
        break;
      case "USER":
        setRoutes(routesList.userRoutes);
        break;
      case "undef":
        setRoutes(routesList.publicRoutes);
        break;
      default:
        setRoutes(routesList.publicRoutes);
    }
  }, [user, location]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {routes.map(route => (
            <Nav.Link to={`${route.path}`} as={NavLink} key={route.name} exact>
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Text>
        {root !== "login" && <UserControl></UserControl>}
      </Navbar.Text>
    </Navbar>
  );
};
