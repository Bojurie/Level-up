import React from 'react';
import './Contact.css'

const Contact = () => {
  const video ='https://www.pexels.com/video/a-person-kicking-a-soccer-ball-3192198/'
  return (
    <div className='contact'>
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
