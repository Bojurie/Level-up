import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, RedirectFunction} from 'react-router-dom'

import { useSelector } from "react-redux";


import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Vlog from './pages/Vlog';
import Cart from './pages/Cart';
import Success from './pages/Success';
import ProductList from './pages/ProductList';
import Product from './pages/Product';


function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
        <Router>
          <Navbar />
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/vlog' element={<Vlog />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/register' element={<Register />} />
              <Route path="/products/:category" element={ <ProductList />}></Route>
              <Route path="/product/:id" element={ <Product />}></Route>
               <Route path="/login">{user ? <RedirectFunction to="/" /> : <LogIn />}
              </Route>
              <Route path="/register" >{user ? <RedirectFunction to="/" /> : <Register />}
              </Route> 
              <Route path='/cart' element={<Cart/>} />
              <Route path='/success' element={<Success />} />
          </Routes>
          <Footer />
        </Router>
  );
}

export default App;
