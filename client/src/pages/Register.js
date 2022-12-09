import React from 'react';
import RegisterForm from '../components/auth/registerForm';
import { FormTitle } from '../components/FormTitle';

const Register = () => {
  return (
    <div className='register'>
        <FormTitle className="RegisterForm-title" text="Register " />
        <div className='register-wrapper'>
            <div className=''>
              <RegisterForm />
            </div>
        </div>
      
    </div>
  );
}

export default Register;
