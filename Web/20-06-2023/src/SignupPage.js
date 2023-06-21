import React, { useState } from 'react';
import './SignupPage.css'
import logo from './logo.jpeg'
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useMutation, useQuery } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with the server's GraphQL endpoint
  cache: new InMemoryCache(),
});
const GET_USERS = gql`
  query {
    users {
      name
      lastname
      email
      pass
    }
  }
`;
const CREATE_USER = gql`
  mutation CreateUser($name: String!,$lastname: String!, $email: String!,$pass: String!) {
    createUser(name: $name, lastname : $lastname,email: $email,pass : $pass) {
      name
      lastname
      email
      pass
    }
  }
`;
function SignupPage() {
    const [Name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const [createUser] = useMutation(CREATE_USER);

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
           /*  console.log(Name);
            console.log(LastName);
            console.log(Email);
            console.log(NewPassword); */
            createUser({ variables: {name: Name, lastname: LastName, email: Email, pass: NewPassword } })
                .then(() => {
                    // Refetch the users after successful creation
                    // You can skip this if you're using real-time updates or subscriptions
                    client.resetStore();
                })
                .catch((error) => {
                    console.error(error);
                });
                e.target.reset();
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