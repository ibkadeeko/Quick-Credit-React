import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component, isLoggedIn, isAdmin, ...rest
}) => (
   <Route {...rest} render={(props) => (
     isLoggedIn
       ? <Component {...props} />
       : <Redirect to='/' />
   )} />
);

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  isAdmin: auth.isAdmin
});

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
