import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../statics/icons/logo.svg';
import '../../statics/css/LoginPage.css';

import LoginForm from '../common/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/friends');
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo" />
      <LoginForm handleLogin={handleLogin} />
      <div className="footer">
        <a className="link" href="#">Find My Kakao Account</a> | <a className="link" href="#">Reset Password</a>
      </div>
    </div>
  );
};

export default LoginPage;
