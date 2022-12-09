import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { FormTitle } from '../components/FormTitle';
import './Login.css'

const LogIn = () => {
  return (
    <div >
      <FormTitle className="FormTitleLogin-title" text="Log - In " />
      <div>
        <div className='login'>
          <div className='login-wrapper'>
            <div className='login-form-wrapper'>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      
     
     
    </div>
  );
}

export default LogIn;
