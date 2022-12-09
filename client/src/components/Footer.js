import React from 'react';
import { Link } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { instagram } from '@fortawesome/free-solid-svg-icons'

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-header-wrapper'>
          <div className='footer-header'>
            <h1>Contact Us</h1>
          </div>
          <div className='footer-paragraph'>
            <p>The header and the footer, they both are the most important elements of your Weebly website design but yet, so many put a very little effort on the website footer.</p>
          </div>
          
        </div>
        <div className='footer-nav-content'>
            <div className='footer-navs-left'>
              <h3>Talk With Us</h3><hr/>
              <div className='footer-contact'>
                <div className='tel'>
                  <p>T: + 1 714.306.2369</p>
                </div>
                <div className='email'>
                  <p>@: Levelupfitness@gmail.com</p>
                </div>
                <div className='support'>
                  <p>S: Levelupsupport.com</p>
                </div>
                
              </div>

            </div>
            <div className='footer-navs-middle'>
                <h3>Say Hello</h3><hr/>
              <div className='footer-form'>
              
                  <form className='form'>
                    <input type='text' placeholder=' Name' />
                    <input type='text' placeholder=' Email' />
                    <input type='text' placeholder=' Telephone' />
                    <textarea placeholder='Message...' />
                  </form>
                  <div className='form-btn'>
                    <input type='submit' placeholder='' />
                  </div>
                  
              </div>
            </div>
            <div className='footer-navs-right'>
              <h3>Keep Connected</h3><hr/>
              <div className='social-media'>
                <p><Link to='/'>Facebook</Link></p>
                <p><Link to='/'><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</Link></p>
                <p><Link to='/'>Twitter</Link></p>
               
              </div>

            </div>
        </div>
        

      </div>
    </div>
  );
}

export default Footer;
