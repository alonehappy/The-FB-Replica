import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
        <div className='login-container'>
        <div className="Login">
        <div className="facebook">
        <div className="facebooktext">  
        facebook
        </div>
          <div className="title">
          Facebook helps you connect and share 
          <br></br>with the people in your life.
          </div>
          </div>      
          <div className="loginContainer">        
          <div className="logindetail">
          <input type="email"placeholder="Email address or Phone Number"/>
          <br></br>
          <input type="Password"placeholder="Password"/>
          <br></br>
          <button className="btn">
          <Link to="/">LogIn</Link>
            </button>
            </div>
        <div className="forget">
          <a href="#">Forgotten account?</a>
          <br />
        </div>
        <div className="create">
        <br></br> 
        <button className="btns">
          Create New Account
        </button>
      </div>
      <p></p>
      <br></br>
      
      </div>
      
      </div>
        </div>
    </>
  )
}

export default Login