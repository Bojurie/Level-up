import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import './Login.css'

const LogIn = () => {
  return (
    <div className='login'>
       <FormTitle className="sign-in-form__title" text="Shop" />
      <div className='login-wrapper'>
          <div className='login-form-wrapper'>
            <LoginForm />
          </div>
          
      </div>
     
     
    </div>
  );
}

export default LogIn;
