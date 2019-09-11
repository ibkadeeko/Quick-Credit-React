import * as React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as authActions from '../../store/actions/authActions';

class SignInForm extends React.Component {
   static propTypes = {
     userAuthRequest: PropTypes.func.isRequired,
     isLoggedIn: PropTypes.bool.isRequired,
     errorMessage: PropTypes.string,
     history: PropTypes.shape({
       push: PropTypes.func.isRequired
     }).isRequired
   }

   constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: '',
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
       const { email, password } = this.state;
       await this.setState({ saving: true });
       await userAuthRequest({ email, password }, 'login');
       toast.success('Login Successful');
       history.push('/dashboard');
       await this.setState({ saving: false, email: '', password: '' });
     } catch (error) {
       toast.error(error);
       this.setState({ saving: false });
     }
   }

   render() {
     const { saving, email, password } = this.state;
     return (
      <form id="login-form" onSubmit={this.handleSubmit}>
         <h2>Welcome Back!</h2>
         <input
           name="email"
           type="email"
           placeholder="Email"
           onChange={this.handleChange}
           value={email}
           autoFocus
           required
         />
         <input
           name="password"
           type="password"
           placeholder="Password"
           onChange={this.handleChange}
           value={password}
           required
         />
         <button className="btn__form" type="submit" disabled={saving}>{saving ? 'Please wait...' : 'login'}</button>
         <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
         <p className="message"><a className="grey" href="forgotpassword.html">Forgot Password?</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
