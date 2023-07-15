import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/navbar';
import Home from './Components/HomePage/home';
import { HashRouter as Router, Routes ,Route } from 'react-router-dom';
import Shoes from './Components/Shoes/Shoes';
import Footer from './Components/Footer/footer';
import Watches from './Components/Watches/watches';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' index element={<Home />}/>
    <Route path='/shoes' index element={<Shoes />}/>
    <Route path='/watches' index element={<Watches />}/>
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
