import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Container } from "react-bootstrap";

import { NavigationAdmin } from "../components/NavigationAdmin";
import SubjectCreate from "../components/SubjectCreate";
import SubjectsList from "../components/SubjectsList";
import Subject from "./Subject";

export const Admin = () => {
  let { path } = useRouteMatch();

  return (
    <Fragment>
      <NavigationAdmin></NavigationAdmin>
      <Container>
        <Switch>
          <Route path={`${path}/subjects`} exact>
            <SubjectsList></SubjectsList>
          </Route>
          <Route path={`${path}/controls`}>
            <SubjectCreate></SubjectCreate>
          </Route>
          <Route path={`${path}/subjects/:id`}>
            <Subject></Subject>
          </Route>
        </Switch>
      </Container>
    </Fragment>
  );
};
