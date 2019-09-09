import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Dashboard from '../Dashboard/Dashboard.jsx';
import * as userLoanActions from '../../store/actions/userLoanActions';

class LoanApplicationForm extends Component {
  static propTypes = {
    userDetails: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    loanApplicationRequest: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      bank: '',
      accountNumber: '',
      amount: '',
      tenor: '',
      saving: false
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { history, loanApplicationRequest, userDetails } = this.props;
      const {
        bank, accountNumber, amount, tenor
      } = this.state;
      const { firstname: firstName, lastname: lastName, email } = userDetails;

      this.setState({ saving: true });
      await loanApplicationRequest({
        firstName, lastName, email, bank, accountNumber, amount, tenor
      });
      toast.success('Your application has been sent');
      this.setState({ saving: false });
      history.push('/dashboard');
    } catch (error) {
      toast.error(error);
      this.setState({ saving: false });
    }
  }

  render() {
    const {
      bank, accountNumber, amount, tenor, saving
    } = this.state;
    const {
      userDetails: {
        firstname, lastname, email
      }
    } = this.props;

    return (
      <Dashboard>
         <div className="container">
            <div className="login-page">
              <div className="form">
                <form id="loanApplication" onSubmit={this.handleSubmit}>
                  <input name="fullName" type="text" value={`${firstname} ${lastname}`} readOnly />
                  <input name="email" type="text" value={email} readOnly />
                  <input
                    name="bank"
                    id="bank"
                    type="text"
                    pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$"
                    placeholder="Bank"
                    value={bank}
                  onChange={this.handleChange}
                  required
                  />
                  <input
                    name="accountNumber"
                    id="accountNumber"
                    type="text"
                    pattern="[0-9]{10}"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={this.handleChange}
                  required
                  />
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    min="10000"
                    max="200000"
                  placeholder="Loan Amount eg. 10000"
                  value={amount}
                  onChange={this.handleChange}
                  required
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
                  required
                  />
                <button className="btn__form" type="submit" disabled={saving}>
                  {saving ? 'Sending Application...' : 'submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
      </Dashboard>
    );
  }
}

const mapStateToProps = ({ auth, userLoan }) => ({
  userDetails: auth.user,
  isLoggedIn: auth.isLoggedIn,
  errorMessage: userLoan.error
});

const mapDispatchToProps = {
  loanApplicationRequest: userLoanActions.loanApplicationRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplicationForm);
