import React from 'react';
import {useHistory} from 'react-router-dom';

export const Home = () => {
  let history = useHistory();
  history.push('/admin')
  return <h1>This is home page</h1>;
};
