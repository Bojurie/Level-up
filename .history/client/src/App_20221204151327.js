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

import {DataProvider} from './components/Context'
import axios from 'axios';

const apiUrl = "http://localhost:5001/products";
API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGJhMzQzNjY5MTM5ZDg2ZmU5MGZjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE3MjA1OSwiZXhwIjoxNjcxMDM2MDU5fQ.xf3J1JOH5mhPlhvQVzsmky3u1luYC9YAAsOPoBv7YCE';

const authAxios = axios.create({
  baseUrl: apiUrl,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
})
function App() {

  return (
        <Router>
          <DataProvider>
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
          </DataProvider>
        </Router>
  );
}

export default App;
