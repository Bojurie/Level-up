import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'

const LoginForm = () => {
    const regUrl = 'http://localhost:5001/auth/login'
    const [ userLogin, setUserLogin ] = useState({
        username: " ",
        password: " "
    })

    const submit = (e) =>{
        e.preventDefault();
        axios.post(regUrl ,
        {
            username: userLogin.username,
            password: userLogin.password,
        })
        .then(res => {
            console.log(res.userLogin)
        })
    }
    const handleInputChange = (e) => {
        const newUserLogin = {...userLogin}
        newUserLogin[e.target.id] = e.target.value
        setUserLogin(newUserLogin)
        console.log(newUserLogin)
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
                <button type='submit'  >Log-In</button>
              </div>
          </form>
          
          
          <Link to='/register'>Need an account ? Register here</Link>


      </div>
        
        
   </div>
  )
}

export default LoginForm