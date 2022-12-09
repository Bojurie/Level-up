import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css'

const LoginForm = () => {
  const navigate = useNavigate();
    const regUrl = 'http://localhost:5001/auth/login'
    const [ userLogin, setUserLogin ] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const newUserLogin = {...userLogin}
        newUserLogin[e.target.id] = e.target.value
        setUserLogin(newUserLogin)
        console.log(newUserLogin)
  }
    
      const submit = (e) =>{
        e.preventDefault();
        axios.post(regUrl ,
        {
            username: userLogin.username,
            password: userLogin.password,
        })
        .then(res => {
            console.log(res.userLogin)
            alert("Success")
            localStorage.setItem('token', result.userLogin.accessToken)
            navigate('/dashboard')
        })
        .catch(error => {
          alert("Service error")
          cconsole.log(error)
        })
    }

  return (
   <div className='loginForm'>
      <div className='loginForm-wrapper'>
          <div className='loginForm-header'>
            <h1 className='login-header'>Log-In</h1>
            <p>Thank you for retruning, Please login below to continue</p>
          </div>

          <form className='form' onSubmit={(e) => submit(e) }>
            <input 
                type='text' 
                name='username' 
                id='username' 
                placeholder=' Username...' 
                value={userLogin.username} 
                onChange = {(e) => handleInputChange(e)}  
                required 
              />
            <input 
                type='password' 
                name='password' 
                id='password' 
                placeholder=' Password...' 
                value={userLogin.password} 
                onChange = {(e) => handleInputChange(e)}  
                required 
              />
              <div className='loginBtn'>
                <input type='submit' value=" Log-In" />
              </div>
          </form>
          
          
          <Link to='/register'>Need an account ? Register here</Link>


      </div>
        
        
   </div>
  )
}

export default LoginForm