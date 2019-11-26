import React from 'react';
import {useHistory} from 'react-router-dom';
import * as importedHistory from 'history';

export const Home = () => {
  console.log(importedHistory);
  let history = useHistory();
  history.push('/admin')
  return <h1>This is home page</h1>;
};
