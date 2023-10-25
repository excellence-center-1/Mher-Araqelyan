import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registerpage from './Components/Register-page';
import LoginPage from './Components/Login-page';
/* import Game from './Game'; */
import VideoGallery from './Components/MainPage';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/register' exact element={<Registerpage/>} />
      <Route path='/login' exact element={<LoginPage/>} />
      <Route path="/video" element={<VideoGallery />} /> 
      <Route path='/' element={<Navigate to='register' />} /> 
      
    </Routes>
  </Router>
  );
}
export default App;
