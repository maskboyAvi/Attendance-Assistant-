import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail() && validatePassword()) {
      // Redirect the user to the dashboard page wherever attendance is being taken
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('Enter your Email');
      return false;
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailError('Please provide a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Enter your Password');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    } else if (password.length > 12) {
      setPasswordError('Password should be less than 12 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  return (
    <div className='bdy-login'>
    <section className="main-login">
      <div className="login-container-login">
        <p className="title-login">Welcome back</p>
        <div className="separator-login"></div>
        <p className="welcome-message-login">Teacher's Portal needs Username and Password.</p>
        <form className="login-form-login" onSubmit={handleSubmit}>
          <div className="form-control-login">
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <FaUser className="icon-login" />
          </div>
          {emailError && <p className="error-login">{emailError}</p>}
          <div className="form-control-login">
            <input
              type="password"
              id="psd"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FaLock className="icon-login" />
          </div>
          {passwordError && <p className="error-login">{passwordError}</p>}
          <button type="submit" className="submit-login">
            <a href="./hpt.html" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </button>
          <br />
        </form>
        <p className="signup-login">
          New User? <a href="./Signup.html">Sign up</a>
        </p>
        <br />
        <p className="link-login">
          <a className="S_login-login" href="./S_login.html">
            Student Portal
          </a>
        </p>
      </div>
    </section>
    </div> 
  );
}

export default Login;
