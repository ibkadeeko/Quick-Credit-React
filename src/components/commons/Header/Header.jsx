/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };
  }

  toggleMenu = () => {
    this.setState({
      hide: !this.state.hide
    });
  }

  render() {
    const showMenu = this.state.hide ? 'menu' : '';
    return (
      <header>
        <div className="container main-nav">
          <div className="logo">
              <a href="#">quick credit</a>
          </div>
          <nav className={showMenu}>
            <a className="login_btn btn-green" href="./html/login.html">sign in &#10230;</a>
          </nav>
          <div className="menu-toggle" onClick={this.toggleMenu}>
              <a className="toggle-nav" href="#">&#9776;</a>
          </div>
        </div>
      </header>
    );
  }
}
