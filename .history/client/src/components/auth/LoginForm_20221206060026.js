import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

  //   const regUrl = 'http://localhost:5001/auth/'
  //   const [ userLogin, setUserLogin ] = useState({
  //       username: "",
  //       password: ""
  //   })

  //   const handleInputChange = (e) => {
  //       const newUserLogin = {...userLogin}
  //       newUserLogin[e.target.id] = e.target.value
  //       setUserLogin(newUserLogin)
  //       console.log(newUserLogin)
  // }
    
  //     const handleClick = (e) =>{
  //       e.preventDefault();
  //       axios.post(regUrl ,
  //       {
  //           username: userLogin.username,
  //           password: userLogin.password,
  //       })
  //       .then(res => {
  //           console.log(res.userLogin)
  //       })
    }

  return (
   <div className='loginForm'>
      <div className='loginForm-wrapper'>
          <div className='loginForm-header'>
            <h1 className='login-header'>Log-In</h1>
            <p>Thank you for retruning, Please login below to continue</p>
          </div>

          <form className='form' >
            <input 
                type='text' 
                name='username' 
                id='username' 
                placeholder=' Username...' 
                value={userLogin.username} 
                onChange = {(e) =>setUsername (e.target.value)}  
                required 
                // setUsername
              />
            <input 
                type='password' 
                name='password' 
                id='password' 
                placeholder=' Password...' 
                value={userLogin.password} 
                onChange = {(e) =>setPassword(e.target.value)}  
                required 
                // setPassword
              />
              <div className='loginBtn'>
                <input onClick={handleClick} type='submit' value=" Log-In" disabled={isFetching}/>
              </div>
              {error && <Error>Something went wrong...</Error>}
          </form>
          
          
          <Link to='/register'>Need an account ? Register here</Link>


      </div>
        
        
   </div>
  )
}

export default LoginForm;