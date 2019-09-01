import React, { Component } from 'react';
import './QuickEstimate.scss';

export default class QuickEstimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 100000,
      loanTerm: 12,
      monthlyPayment: 8791.59,
      totalInterest: 5499.06,
    };
  }

  /**
 * Calculates the total interest(principal included) on a loan and monthly repayment
 * @param {number} amount - Amount user wants to loan
 * @param {number} months - Number of months user wants to loan money for
 */
loanPayment = (amount, months) => {
  const i = (0.1 / 12); // interest rate is 10%
  // eslint-disable-next-line no-restricted-properties
  const monthlyPayment = (amount * i * Math.pow((1 + i), months)) / (Math.pow((1 + i), months) - 1);
  const totalInterest = (monthlyPayment * months) - amount;
  this.setState({
    monthlyPayment: monthlyPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2)
  });
}

handleChange = async (evt) => {
  const { name, value } = evt.target;
  const parsedValue = parseInt(value, 10);
  await this.setState({ [name]: parsedValue });
  this.loanPayment(this.state.loanAmount, this.state.loanTerm);
};

render() {
  const {
    loanAmount, loanTerm, monthlyPayment, totalInterest
  } = this.state;
  const months = loanTerm === 1 ? ' month' : ' months';

  return (
    <section id="quick_estimate">
      <div className="container">
        <div className="estimate-form">
          <p className="estimate__title">Get a Quick Estimate</p>
          <p>How much would you like to loan?</p>
          <div className="amount-display">&#8358;{loanAmount}</div>
          <input
            type="range"
            name="loanAmount"
            id="loan-amount"
            min="10000"
            max="200000"
            step="10000"
            value={loanAmount}
            onChange={this.handleChange}
           />
          <small>&#8358;10000<span>&#8358;200000</span></small>
          <p>What term would you like?</p>
          <div className="term-display">{loanTerm}{months}</div>
          <input
            type="range"
            name="loanTerm"
            id="loan-term"
            min="1"
            max="18"
            step="1"
            value={loanTerm}
            onChange={this.handleChange}
          />
          <small>1 month<span>18 months</span></small>
          <div className="estimate-display">
            <p>Estimated Monthly Repayment</p>
            <p className="estimate__title"><span id="monthly_payment">&#8358;{monthlyPayment}</span></p>
          <p className="small">Borrowing <span className="amount-display bold">&#8358;{loanAmount}</span> for <span className="term-display bold">{loanTerm}{months}</span> results in a cumulative interest of <span className="bold total-interest">&#8358;{totalInterest}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
}
