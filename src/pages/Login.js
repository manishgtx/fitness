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
                <div>
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
                    <button className={login.signBtn}>
                        <img src={process.env.PUBLIC_URL + '/images/google.png'} alt="" />
                        <span>Log in with Google</span>
                    </button>
                    <div className={login.signLink}>
                        <p>Already have an account? <span>Sign In!</span></p>
                    </div>
                </div>
                <div>
                    <div className={login.continue}>
                        <p>By continuing, I agree to the <span>terms of service</span> and <span>privacy policy</span></p>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login