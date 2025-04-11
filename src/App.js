import logo from './logo.svg';
import './App.css';
import react from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Clients from './components/Clients'
import Products from './components/Products'
import Services from './components/Services'
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
