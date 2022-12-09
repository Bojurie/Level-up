import React from 'react';
import './HomeVlog.css'

const HomeVlog = () => {
  return (
    <div className='newsletter'>
      
      <div className='newsletter-wrapper'>
        <div className='newsletter-heading'>
           <h1>NewsLetter Signup</h1>
           <p>One day at a time</p>
        </div>
        <div className='newsletter-email'>
          <input  placeholder='Enter your email address...'/>
          <button>Enter</button>
        </div>
         
        
      </div>
      
    </div>
  );
}

export default HomeVlog;
