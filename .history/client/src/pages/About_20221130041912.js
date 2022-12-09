import React from 'react';
import './About.css';

import DarkImage from '../images/IMG_5367.jpg'
import { FormTitle } from '../components/FormTitle';
const imgse = DarkImage;

const About = () => {
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem nulla. Urna condimentum mattis pellentesque id nibh tortor id. Posuere ac ut consequat semper viverra nam libero justo. Sit amet tellus cras adipiscing enim. Massa massa ultricies mi quis hendrerit dolor magna. Sapien pellentesque habitant morbi tristique senectus et netus et. Urna porttitor rhoncus dolor purus non enim praesent. Eu non diam phasellus vestibulum lorem sed risus. Et ultrices neque ornare aenean euismod elementum nisi quis. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Dui nunc mattis enim ut tellus   Nunc congue nisi vitae suscipit tellus mauris a diam. Sed faucibus turpis in eu mi bibendum neque egestas. Lacus sed viverra tellus in hac habitasse. Praesent semper feugiat nibh sed. Dignissim suspendisse in est ante. Praesent tristique magna sit amet purus gravida. Sed tempus urna et pharetra. Egestas dui id ornare arcu odio ut sem nulla pharetra. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Dictum sit amet justo donec enim diam vulputate. Augue mauris augue neque gravida in fermentum et sollicitudin."
  return (
    <div className='about'>
    <FormTitle className="sign-in-form__title" text="About Us " />
      <div className=''>
          <div className='aboutContainer'>
            <h1>About</h1>
            <div className='aboutContent'>
              <div className='aboutParagraph'>
                <img src={imgse} alt='pic '/>
                <p>{paragraph}
                <img src={imgse} alt='pic '/> 
                </p>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
