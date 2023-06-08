import React, { useState } from 'react';
import './SignupPage.css'
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
    return <div>
        <div id="Container">
            <div id="login">
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={Name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        <label>LastName:</label>
                        <input
                            type="text"
                            value={LastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            value={Email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
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
    </div>;
}

export default SignupPage;