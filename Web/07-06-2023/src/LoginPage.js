import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate} from 'react-router-dom';
import './LoginPage.css'
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(username)) {
      console.log(username);
      console.log(password);
    } else {
      alert("Please enter valid email");
    }
  };
  const navigateToSignup = () => {
    const navigate = useNavigate();
    navigate('/SignupPage');
  };
  return (
    <div id="Container">
      <div id="login">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          <button type='button' onClick={navigateToSignup}>Sign up</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
/*    */