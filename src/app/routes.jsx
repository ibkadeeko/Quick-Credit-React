// react libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from '../views/Homepage/Homepage.jsx';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);

export default Routes;
