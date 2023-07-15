import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/navbar';
import Home from './Components/HomePage/home';
import { HashRouter as Router, Routes ,Route } from 'react-router-dom';
import Materials from './Components/MiddleSection/materials';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' index element={<Home />}/>
    <Route path='/materials' index element={<Materials />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
