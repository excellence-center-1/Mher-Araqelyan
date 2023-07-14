import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            
            const userData = { email: email, password: password };
            try {
                const response = await fetch('http://localhost:3001/login', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    // Handle success
                    
                    const data = await response.json();
                    localStorage.setItem('userId', data.userId);
                    console.log('User logined successfully with id ',localStorage.getItem('userId'));
                    
                    setTimeout(() => {
                        navigate('/video', { state: { gameData: data } });;
                    }, 1500);
                } else {
                    // Handle error
                    console.log('Error occurred during authentification');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        } else {
            alert("Please enter valid email");
        }
    };
    const navigateToSignup = () => {
        navigate('/register');
    };
    return (
        <div id="ContainerL">

            <div id="loginL">
                <div className='logo'>
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="fields">
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                    <button type='button' onClick={navigateToSignup}>Registration</button>
                </form>
            </div>
        </div>
    );
}
export default LoginPage;
