import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { NavigationAdmin } from '../components/NavigationAdmin';
import {SubjectForm} from '../components/forms/SubjectForm';

export const Admin = () => {
  let { path } = useRouteMatch();

  return (
    <Fragment>
      <NavigationAdmin></NavigationAdmin>
      <Container>
        <Switch>
          <Route path={`${path}/subjects`}>
            <h1>Subjects</h1>
          </Route>
          <Route path={`${path}/controls`}>
            <SubjectForm></SubjectForm>
          </Route>
        </Switch>
      </Container>
    </Fragment>
  );
};
