import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export const NavigationAdmin = () => {
  const { url } = useRouteMatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to={url} as={Link} >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to={`${url}/subjects`} as={Link} >
              Subjects
            </Nav.Link>
            <Nav.Link to={`${url}/controls`} as={Link} >
              Controls
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
