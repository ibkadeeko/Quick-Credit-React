import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as authActions from '../../store/actions/authActions';

class SignUpForm extends React.Component {
  static propTypes = {
    userAuthRequest: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      address: '',
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
      const { userAuthRequest, history } = this.props;
      const {
        firstName, lastName, email, password, phone, address
      } = this.state;
      await this.setState({ saving: true });
      await userAuthRequest({
        firstName, lastName, email, password, phone, address
      }, 'register');
      toast.success('You have successfully signed up');
      history.push('/dashboard');
      await this.setState({
        saving: false, firstName: '', lastName: '', email: '', password: '', phone: '', address: ''
      });
    } catch (error) {
      toast.error(error);
      this.setState({
        saving: false
      });
    }
  }

  render() {
    const {
      saving, firstName, lastName, email, password, phone, address
    } = this.state;
    return (
      <form id="register-form" onSubmit={this.handleSubmit}>
        <h2>Create Account</h2>
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$"
          onChange={this.handleChange}
          value={firstName}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$"
          onChange={this.handleChange}
          value={lastName}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          minLength="6"
          onChange={this.handleChange}
          value={password}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          onChange={this.handleChange}
          value={email}
          required
        />
        <input
          title="Must be 11 digits"
          name="phone"
          type="text"
          pattern="[0-9]{11}"
          onChange={this.handleChange}
          placeholder="Phone number"
          value={phone}
          required
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          onChange={this.handleChange}
          value={address}
          required
        />
        <button className="btn__form" type="submit" disabled={saving}>{saving ? 'Please wait...' : 'register'}</button>
        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  errorMessage: auth.error,
});

const mapDispatchToProps = {
  userAuthRequest: authActions.userAuthRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
