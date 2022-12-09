import React from 'react';
import './Carousel.css'

import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <div>
        <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1611080027910-9a417988bd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1606105961732-6332674f4ee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Second slide"
              />

              <Carousel.Caption>
              
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
               

              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
  );
}

export default Hero;
