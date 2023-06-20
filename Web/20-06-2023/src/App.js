import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
 
  return (
    <ApolloProvider client={client}>
    <Router>
      {/* < Link to="/signup">Sign up</Link>  */}
      <Routes>
        <Route path='/signup' exact element={<SignupPage/>} />
        <Route path='/login' exact element={<LoginPage/>} />
        <Route path='/' element={<Navigate to='login' />} />  
      </Routes>
    </Router>
    </ApolloProvider>
  )
      
}
export default App;
