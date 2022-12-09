import React from 'react';
import { FormTitle } from '../components/FormTitle';
import './Contact.css'

const Contact = () => {

  return (
    <div className='contact'>
      <FormTitle className="ContactForm-title" text="Contact Us " />
      <div className='contact-wrapper'>
        <div className='contact-content'>
          <div className='contact-content-form'>
           
            <h1>Reach us</h1> 
            <form className='contact-form'>
              <div className='formtop-contact'>
                 <input type='text' placeholder=' Name' />
                 <input type='text' placeholder=' Email' />
              </div>
              <div className='formbtm-contact'>
                <input type='text' placeholder=' Subject' />
                 <input type='text' placeholder=' Telephone' />
              </div>
              
              <textarea placeholder='Message...' />
            </form>
            <div className='contactform-btn'>
              <input type='submit' placeholder='' />
            </div>
          
          </div>
          <div className='find-us'>
            <div className='find-us_heading'>
              <h1>Find Us</h1>
              <p> Not only do our Weebly templates look great and are easy to customize, they are also loaded with advanced features, extra page layouts, and a whole lot more to give you the customization you deserve!
                <div className='form-btn'>
                  <input type='submit' value='Find Locations' />
                </div> 
              </p>
                
            </div>
           
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default Contact;
