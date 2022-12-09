import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
import './registerForm.css'

const RegisterForm = () => {
    const [ user, setUser ] = useState({
        firstName: "",
        lastName: "",
        username: " ",
        email: " ",
        password: " "
    })
    const handleInputChange = (e) => {
        const newUser = {...user}
        newUser[e.target.id] = e.target.value
        setUser(newUser)
        console.log(newUser)
  }
       
  return (
   <div className='registerForm'>
      <div className='registerForm-wrapper'>
          <div className='registerForm-header'>
            <h1 className='register-header'>Sign-Up Now</h1>
            <p>Thank you for retruning, Please login below to continue</p>
          </div>

          <form  method='post'  id='form'>
            <input type='text' name='firstName' id='firstName' placeholder=' First name ...' value={user.firstName} onChange = {(e) => handleInputChange(e)} required />
            <input type='text' name='lastName' id='lastName' placeholder=' Last name' value={user.lastName} onChange = {(e) => handleInputChange(e)} required />
            <input type='text' name='username' id='username' placeholder=' Username...' value={user.username} onChange = {(e) => handleInputChange(e)}  required />
            <input type='email' name='email' id='email' placeholder=' Email...' value={user.email} onChange = {(e) => handleInputChange(e)}  required />
            <input type='password' name='password' id='password' placeholder=' Password...' value={user.password} onChange = {(e) => handleInputChange(e)}  required />
            <div className='loginBtn'>
               <input type='submit' onClick={()=>handleSubmit()} value='Register'/>
            </div>
          </form>
          
          
          <Link to='/login'>Already have an account ? Login here</Link>


      </div>
        
        
   </div>
  )
}

export default RegisterForm;