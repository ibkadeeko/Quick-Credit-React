import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import './Dashboard.scss';

export default class Dashboard extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleLogOut = () => {
    localStorage.clear();
  }

   toggleMenu = () => {
     this.setState({
       show: !this.state.show
     });
   }

   render() {
     const { show } = this.state;
     return (
      <>
      <header>
          <div className="container main-nav">
            <div className="logo">
              <a href="#">quick credit</a>
            </div>
            <div className="menu-toggle" onClick={this.toggleMenu}>
              <a className="toggle-nav" href="#">&#9776;</a>
            </div>
          </div>
        </header>
        <div id="main-body" className="bg-grey">
        <div className="wrapper">
          <div id="sidebar" className={show && 'active'}>
            <ul>
              <li><NavLink to="/dashboard" activeClassName="current">Dashboard</NavLink></li>
              <li><NavLink to="/loanApplication" activeClassName="current">Apply</NavLink></li>
              <li><a href="./user-history.html">Loan History</a></li>
              <li><Link to="/" onClick={this.handleLogOut}>Log Out</Link></li>
            </ul>
          </div>
          <div id="main">
            {this.props.children}
          </div>
        </div>
      </div>
      </>

     );
   }
}
