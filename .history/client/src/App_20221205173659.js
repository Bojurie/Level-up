import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
// import Chart from './components/Chart';
import Vlog from './pages/Vlog';



function App() {
  return (
        <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/vlog' element={<Vlog />} />
              <Route path='/login' element={<LogIn/>} />
              <Route path='/register' element={<Register />} />
              {/* <Route path='/chart' element={<Chart/>} /> */}
          </Routes>
          <Footer />
        </Router>
  );
}

export default App;
