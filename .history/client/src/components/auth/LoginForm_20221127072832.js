import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

     const handleInputChange = (e) => {
        const {id , value} = e.target;
     
        if(id === "username"){
            setUsername(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

       const handleSubmit  = () => {
      //  e.preventDefault();
    // get form data out of state
    const returnUser = [{
         email: req.body.email,
        password: req.body.password}]
      axios.post('localhost:5001/login', returnUser)
        .then(res => console.log('Data Sent'))
        .catch(err => console.log(err.data))
     }
   


  return (
   <div className='loginForm'>
      <div className='loginForm-wrapper'>
          <div className='loginForm-header'>
            <h1 className='login-header'>Log-In</h1>
            <p>Thank you for retruning, Please login below to continue</p>
          </div>

          <form method='post' className='form'>
            <input type='text' name='username' placeholder=' Username or Email ...' value={username} onChange = {(e) => handleInputChange(e)} required />
            <input type='password' name='password' value={password} onChange = {(e) => handleInputChange(e)} placeholder=' Password...' required />
            <div className='loginBtn'>
               <input type='submit' onClick={()=>handleSubmit()} value='Log-In'/>
            </div>
          </form>
          
          
          <Link to='/register'>Need an account ? Register here</Link>


      </div>
        
        
   </div>
  )
}

export default LoginForm