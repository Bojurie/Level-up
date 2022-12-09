import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import './Navbar.css'
import Logo from '../images/Logo.png'
import { useSelector } from 'react-redux';



const Navbar = () => {
const quantity = useSelector(state=>state.cart.quantity)

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
            <Link to='/cart'>
              <div className='MenuItem'>
                  <Badge badgeContent={quantity} color='primary'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <ShoppingCartOutlined />

                  </Badge>
              </div>  
            </Link>

        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
