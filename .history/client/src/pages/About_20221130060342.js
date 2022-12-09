import React from 'react';
import './About.css';

import DarkImage from '../images/IMG_5367.jpg'
import { FormTitle } from '../components/FormTitle';
const imgse = DarkImage;

const About = () => {
 
  return (
    <div className='about'>
    <FormTitle className="sign-in-form__title" />
      <div className=''>
          <div className='aboutContainer'>
            <h1> Who Are We </h1>
            <div className='aboutContent'>
              <div className='aboutParagraph'>
                <img src={imgse} alt='pic '/>
                
                
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
