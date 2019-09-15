import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard.jsx';

export default class UserDashboard extends Component {
  render() {
    return (
      <Dashboard>
        <div className="container">
            <div className="user-preview">
              <div className="overview card">
                <div className="card-title">
                  overview
                </div>
                <div className="card-body">
                    <p className="overview__value">
                        <span className="text-offset">total loans</span>
                        <span>3</span>
                      </p>
                      <p className="overview__value">
                        <span className="text-offset">total borrowed</span>
                        &#8358;<span>230000</span>
                      </p>
                </div>
              </div>
              <div className="overview card">
                <div className="card-title">
                  current
                </div>
                <div className="card-body">
                    <p className="overview__value">
                        <span className="text-offset">loan amount</span>
                        &#8358;<span>100000</span>
                      </p>
                      <p className="overview__value">
                        <span className="text-offset">outstanding balance</span>
                        &#8358;<span>79124.29</span>
                      </p>
                </div>
              </div>
              <div className="overview card">
                <div className="card-title">
                  current
                </div>
                <div className="card-body">

                    <p className="overview__value">
                      <span className="text-offset">monthly payment</span>
                      &#8358;<span>8791.59</span>
                    </p>
                    <p className="overview__value">
                      <span className="text-offset">next payment due date</span>
                      <span>30/04/2019</span>
                    </p>
                    <p>
                      <a className="text-offset" href="./user-loan-details.html">VIEW DETAILS &#10230;</a>
                    </p>
                </div>
              </div>
            </div>
          </div>
      </Dashboard>
    );
  }
}
