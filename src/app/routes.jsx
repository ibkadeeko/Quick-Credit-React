// react libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from '../views/Homepage/Homepage.jsx';
import AuthPage from '../views/AuthPage/AuthPage.jsx';
import UserDashboard from '../views/UserPages/UserDashboard.jsx';
import LoanApplicationForm from '../views/UserPages/LoanApplicationForm.jsx';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" render={(routeProps) => <AuthPage {...routeProps} login={true} />} />
    <Route exact path="/register" render={(routeProps) => <AuthPage {...routeProps} login={false} />} />
    <Route exact path="/dashboard" component={UserDashboard} />
    <Route exact path="/loanApplication" component={LoanApplicationForm} />
    <Route component={<div>This route does not exist</div>} />
  </Switch>
);

export default Routes;
