import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoutes = ({
  component: Component, isLoggedIn, isAdmin, ...rest
}) => (
   <Route {...rest} render={(props) => (
     isLoggedIn && isAdmin
       ? <Component {...props} />
       : <Redirect to='/' />
   )} />
);

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  isAdmin: auth.isAdmin
});

AdminRoutes.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(AdminRoutes);
