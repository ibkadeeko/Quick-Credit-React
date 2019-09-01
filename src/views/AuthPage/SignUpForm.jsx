import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => (
  <form id="register-form">
    <h2>Create Account</h2>
    <input name="firstName" type="text" placeholder="First name" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$" required />
    <input name="lastName" type="text" placeholder="Last name" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$" required />
    <input name="password" type="password" placeholder="Password" minLength="6" required/>
    <input name="email" type="email" placeholder="Email address" required/>
    <input title="Must be 11 digits" name="phoneNumber" type="text" pattern="[0-9]{11}" placeholder="Phone number" required/>
    <input type="text" name="address" id="address" placeholder="Address" required />
    <button>register</button>
    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
  </form>
);

export default SignUpForm;
