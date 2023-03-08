import React from 'react'
import login from '../styles/login.module.css';
const Login = () => {
  return (
    <div>
        <div className={login.container}>
            <img src={process.env.PUBLIC_URL + '/bar.jpg'} className={login.banner} alt="" />
            <div className={login.overlay}></div>
        </div>
        <div className={login.form}>
            <h4>Login</h4>
            <div className={login.inputContainer}>
                <span>+91</span>
                <input type="text" />
            </div>
            {/* OR */}
            <div className={login.or}>
                <span></span>
                <p>OR</p>
                <span></span>
            </div>
        </div>   
    </div>
  )
}

export default Login