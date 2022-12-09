import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './registerForm.css'

const RegisterForm = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confPassword,setConfPassword] = useState(null);
    const [user, newUser ] = useState([])


     const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "username"){
            setUsername(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfPassword(value);
        }

    }

   

     const handleSubmit  = () => {
      //  e.preventDefault();
    // get form data out of state
    const newUser = [{firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
       confPassword: req.body.confPassword}]
      axios.post('localhost:5001/auth/register', newUser)
        .then(res => console.log('Data Sent'))
        .catch(err => console.log(err.data))
     }


  return (
   <div className='registerForm'>
      <div className='registerForm-wrapper'>
          <div className='registerForm-header'>
            <h1 className='register-header'>Sign-Up Now</h1>
            <p>Thank you for retruning, Please login below to continue</p>
          </div>

          <form  method='post'  id='form'>
            <input type='text' name='firstName' id='firstName' placeholder=' First name ...' value={firstName} onChange = {(e) => handleInputChange(e)} required />
            <input type='text' name='lastName' id='lastName' placeholder=' Last name' value={lastName} onChange = {(e) => handleInputChange(e)} required />
            <input type='text' name='username' id='username' placeholder=' Username...' value={username} onChange = {(e) => handleInputChange(e)}  required />
            <input type='email' name='email' id='email' placeholder=' Email...' value={email} onChange = {(e) => handleInputChange(e)}  required />
            <input type='password' name='password' id='password' placeholder=' Password...' value={password} onChange = {(e) => handleInputChange(e)}  required />
            <input type='password' name='confPassword' id='confPassword' placeholder='Confirm Password...' value={confPassword} onChange = {(e) => handleInputChange(e)}  required />
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