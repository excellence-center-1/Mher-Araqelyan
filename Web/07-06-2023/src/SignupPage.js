import React, { useState } from 'react';
import './SignupPage.css'
import logo from './logo.jpeg'
function SignupPage() {
    const [Name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(Email)) {
            console.log(Name);
            console.log(LastName);
            console.log(Email);
            console.log(NewPassword);
        } else {
            alert("Please enter valid email");
        }
    };
    return <div id="ContainerS">
        <div id="signup">
        <div className='logo'>
       <img src={logo} alt="BigCo Inc. logo"/>
       </div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={Name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="fields">
                    <label>LastName:</label>
                    <input
                        type="text"
                        value={LastName}
                        onChange={handleLastNameChange}
                    />
                </div>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
}
export default SignupPage;