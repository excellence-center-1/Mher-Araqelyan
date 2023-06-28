import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registerpage from './Register-page';
import LoginPage from './Login-page';
import Game from './Game';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/register' exact element={<Registerpage/>} />
      <Route path='/login' exact element={<LoginPage/>} />
      <Route path="/game" element={<Game />} />

      <Route path='/' element={<Navigate to='register' />} /> 
      
    </Routes>
  </Router>
  );
}
export default App;
