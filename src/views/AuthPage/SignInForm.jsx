import React from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => (
   <form id="login-form">
      <h2>Welcome Back!</h2>
      <input name="email" type="email" placeholder="Email" autoFocus required/>
      <input name="password" type="password" placeholder="Password" required/>
      <button>login</button>
      <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
      <p className="message"><a className="grey" href="forgotpassword.html">Forgot Password?</a></p>
  </form>
);

export default SignInForm;
