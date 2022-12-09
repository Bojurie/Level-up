import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import './Login.css'

const LogIn = () => {
  return (
    <div className='login'>
      <div className='login-wrapper'>
          <div className='login-form-wrapper'>
            <LoginForm />
          </div>
          
      </div>
     
     
    </div>
  );
}

export default LogIn;
