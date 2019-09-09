import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { userInfo } from 'os';
import Dashboard from '../Dashboard/Dashboard.jsx';

export default class LoanApplicationForm extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  constructor(props) {
    super(props);
    this.state = {
      bank: '',
      accountNumber: 0,
      loanAmount: 0,
      tenor: 0,
    };
  }

  handleChange = (evt) => {}

  render() {
    const {
      bank, accountNumber, loanAmount, tenor
    } = this.state;
    return (
      <Dashboard>
         <div className="container">
            <div className="login-page">
              <div className="form">
                <form id="loanApplication">
                  <input name="fullName" type="text" value="firstname Lastname" readOnly />
                  <input name="email" type="text" value="email@email.com" readOnly />
                  <input name="phoneNumber" type="text" value="08007593000" readOnly />
                  <input
                    name="bank"
                    id="bank"
                    type="text"
                    pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$"
                  placeholder="Bank"
                  value={this.state.bank}
                    onChange={this.handleChange}
                  />
                  <input
                    name="accountNumber"
                    id="accountNumber"
                    type="text"
                    pattern="[0-9]{10}"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={this.handleChange}
                  />
                  <input
                    type="number"
                    name="loanAmount"
                    id="loanAmount"
                    min="10000"
                    max="200000"
                  placeholder="Loan Amount eg. 10000"
                  value={loanAmount}
                  onChange={this.handleChange}
                  />
                  <input
                    type="number"
                    name="tenor"
                    id="tenor"
                    min="1"
                    max="18"
                    placeholder="Number of months eg 12"
                    value={tenor}
                    onChange={this.handleChange}
                  />
                  <button>submit</button>
                </form>
              </div>
            </div>
          </div>
      </Dashboard>
    );
  }
}
