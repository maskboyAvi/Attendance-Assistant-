import React, { useState } from 'react';
import slng from './s_login.module.css';
import { Link } from 'react-router-dom';
import { FaUser,FaLock } from 'react-icons/fa';

function TLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkEmail = () => {
    const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      alert('Enter your Email');
      return false;
    } else if (!filter.test(email)) {
      document.getElementById('email').focus();
      alert('Please provide a valid email address');
      return false;
    }
    return true;
  };

  const checkPass = () => {
    if (password === '') {
      alert('Enter your Password');
      return false;
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return false;
    } else if (password.length > 12) {
      alert('Password should be less than 12 characters');
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (checkEmail() && checkPass()) {
      alert('Login Successful');
      window.location.href = './hps.html';
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
    <body className={slng['slg-body']}>
    <section className={slng.main}>
      <div className={slng['login-container']}>
        <p className={slng.title}>Hello There!!</p>
        <div className={slng.separator}></div>
        <p className={slng['welcome-message']}>Teacher's Portal needs Username and Password.</p>
        <form className={slng['login-form']}>
          <div className={slng['form-control']}>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <i className="fas fa-user"></i> */}
            <i className={slng['icon']}><FaUser/></i>
          </div>
          <div className={slng['form-control']}>
            <input
              type="password"
              id="psd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <i className="fas fa-lock"></i> */}
            <i className={slng['icon']}><FaLock/></i>
          </div>
          <button className={slng.submit} onClick={handleLogin}>
            Login
          </button>
        </form>
        <p className={slng.signup}>
          New User? <a href="./Signup.html">Sign up</a>
        </p>
        <br />
        <p className={slng.link}>
          <a className={slng['T_login']} href="./T_login.html">
            Teacher's Portal
          </a>
        </p>
      </div>
    </section>
    </body>
    </>
  );
}

export default TLogin;
