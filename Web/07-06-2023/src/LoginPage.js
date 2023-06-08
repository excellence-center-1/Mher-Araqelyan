import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate} from 'react-router-dom';
import './LoginPage.css'
function LoginPage() {
  const navigate = useNavigate();
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
   
    navigate('/signup');
    
  };
  return (
    <div id="ContainerL">
      <div id="loginL">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div class="fields">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div class="fields">
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