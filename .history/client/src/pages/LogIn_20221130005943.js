import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { FormTitle } from '../components/FormTitle';
import './Login.css'

const LogIn = () => {
  return (
    <div className='login'>
      <div>
        <div>
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
