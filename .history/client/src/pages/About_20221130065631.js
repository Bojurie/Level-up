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
                <div className=''>               
                    <div className='AboutHistory'>
                        <div className='history-img'>
                            <img src={imgse} alt='img'/>
                        </div>
                        <div className='history-content'>
                          <h2>History of Level Up</h2>
                          <p>I want to use Mongoose to create a collection, insert, delete, find and update documents in it. This is my first go with mongoose,</p>
                        </div>
                    </div>
                    <div className='AboutGoal'>
                        <div className='history-img'>
                            <img src={imgse} alt='img'/>
                        </div>
                        <div className='history-content'>
                          <h2>History of Level Up</h2>
                          <p>I want to use Mongoose to create a collection, insert, delete, find and update documents in it. This is my first go with mongoose,</p>
                        </div>
                    </div>
                    <div className='Aboutproduct'>
                        <div className='history-img'>
                            <img src={imgse} alt='img'/>
                        </div>
                        <div className='history-content'>
                          <h2>History of Level Up</h2>
                          <p>I want to use Mongoose to create a collection, insert, delete, find and update documents in it. This is my first go with mongoose,</p>
                        </div>
                    </div>
                    
                </div>
                
                
                
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
