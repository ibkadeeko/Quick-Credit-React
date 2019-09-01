/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">quick credit</Link>
          </div>
          <nav className={showMenu}>
            <Link className="login_btn btn-green" to="/login">sign in &#10230;</Link>
          </nav>
          <div className="menu-toggle" onClick={this.toggleMenu}>
              <a className="toggle-nav" href="#">&#9776;</a>
          </div>
        </div>
      </header>
    );
  }
}
