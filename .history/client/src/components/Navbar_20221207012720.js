import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
import Logo from '../images/Logo.png'



const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <Link to='/' className='logo'>
            <img src={Logo} alt='logo' />
        </Link>
        <ul className='navbar-links'>
            <Link to='/' >Home </Link>
            <Link to='/shop'> Shop</Link>
            <Link to='/Vlog'> V-Log</Link>
            <Link to='/about'> About</Link>
            <Link to='/contact'> Contact</Link>
            <Link to='/login'> Login </Link>
            <Link to='/register'>SignUp</Link>
            <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>

        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
