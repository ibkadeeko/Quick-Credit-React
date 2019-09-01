/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container main-nav">
          <div className="logo">
              <a href="#">quick credit</a>
          </div>
          <nav className="menu">
            <a className="login_btn btn-green" href="./html/login.html">sign in &#10230;</a>
          </nav>
          <div className="menu-toggle">
              <a className="toggle-nav" href="#">&#9776;</a>
          </div>
        </div>
      </header>
    );
  }
}
