import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';
import './AuthPage.scss';
import Header from '../../components/commons/Header/Header.jsx';

export default class index extends Component {
  static propTypes = {
    login: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { login } = this.props;
    return (
      <>
        <Header />
        <div id="main-body" className="bg-grey">
          <div className="container">
            <div className="login-page">
              <div className="form">
                {login ? <SignInForm /> : <SignUpForm />}
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}
