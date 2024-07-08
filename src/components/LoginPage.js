import React from 'react';
import '../statics/css/LoginPage.css';
import { useNavigate } from 'react-router-dom';

import logo from "../statics/icon/logo.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/friends');
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo" />
      <div className="form">
        <input className="input" type="text" placeholder="Email or Phone Number" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button" onClick={handleLogin}>Log in</button>
        <div className="divider">Or</div>
        <button className="qr-code-button">QR Code Log In</button>
        <div className="keep-logged-in">
          <input type="checkbox" id="keepLoggedIn" />
          <label htmlFor="keepLoggedIn">Keep me logged in</label>
        </div>
      </div>
      <div className="footer">
        <a className="link" href="#">Find My Kakao Account</a> | <a className="link" href="#">Reset Password</a>
      </div>
    </div>
  );
};

export default LoginPage;
