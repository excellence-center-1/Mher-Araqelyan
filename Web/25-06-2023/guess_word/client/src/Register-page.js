import React, { useState } from 'react';
import './SignupPage.css'
import { BrowserRouter as Router, Route, Link, useNavigate} from 'react-router-dom';
function Registerpage() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateEmail(Email)) {
            const userData = { email: Email, password: NewPassword };
            try {
                const response = await fetch('http://localhost:3000/register/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    // Handle success
                    console.log('User registered successfully');
                    setTimeout(() => {
   
                        navigate('/login');
                        
                      },1500);

                } else {
                    // Handle error
                    console.log('Error occurred during registration');
                }
            } catch (error) {
                console.log('Error:', error);
            }
            
        } else {
            alert("Please enter valid email");
        }
    };
    return <div id="ContainerS">
        <div id="signup">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <label>Email:</label>
                    <input
                        type="text"
                        value={Email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="fields">
                    <label>New Password: </label>
                    <input
                        type="password"
                        value={NewPassword}
                        onChange={handleNewPasswordChange}
                    />
                </div>
                <button type="submit" >Sign Up</button>
            </form>
        </div>
    </div>
}
export default Registerpage;