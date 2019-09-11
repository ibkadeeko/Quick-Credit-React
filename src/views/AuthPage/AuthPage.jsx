import * as React from 'react';
import * as PropTypes from 'prop-types';

import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';
import './AuthPage.scss';
import Header from '../../components/commons/Header/Header.jsx';

const AuthPage = ({ login, ...props }) => (
    <>
      <Header />
      <div id="main-body" className="bg-grey">
        <div className="container">
          <div className="login-page">
            <div className="form">
              {login
                ? <SignInForm {...props} />
                : <SignUpForm {...props} />
              }
            </div>
          </div>
        </div>
      </div>
    </>

);

AuthPage.propTypes = {
  login: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default AuthPage;
