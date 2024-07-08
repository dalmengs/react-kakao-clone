import React from 'react';

const LoginForm = ({ handleLogin }) => {
  return (
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
  );
};

export default LoginForm;
