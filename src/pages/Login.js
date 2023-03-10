import {useState} from 'react'
import login from '../styles/login.module.css';
import { signInWithGoogle } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
const Login = ({setUserDetails}) => {
   const navigate = useNavigate();
    const userLogin = async () => {
        try {
            const result = await signInWithGoogle()
            const name = result.user.displayName;
            const email = result.user.email;
            const profile = result.user.photoURL
            setUserDetails({name,email,profile});
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div className={login.mainContainer}>
            <div className={login.headerWrapper}>
                <div className={login.header}>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/laptop.svg'} alt="" />
                    </div>
                    <div className={login.headerInfo}>
                        <h2>Fitness Made Easy</h2>
                        <p>FIBO helps you track your fitness goals, and manage your gym, clients and branches in a one step solution,saving you time and money!</p>
                    </div>
                </div>
            </div>
            <div className={login.container}>
                <img src={process.env.PUBLIC_URL + '/bar.jpg'} className={login.banner} alt="" />
                <div className={login.overlay}></div>
            </div>
            <div className={login.form}>
                <div>
                    <div className={login.desktopLogoContainer}>
                        <img src={process.env.PUBLIC_URL + './images/logo.svg'} alt="" />
                        <h2>FI<span>T</span>NESS</h2>
                    </div>
                    <div className={login.desktopInfo}>
                        <h2 className={login.titleDesktop}>Login to your Account</h2>
                        <p>Your Own Digital Campaign</p>
                    </div>
                    <h4 className={login.titleMobile}>Login</h4>
                    <div className={login.inputContainer}>
                        <span>+91</span>
                        <input type="text" />
                    </div>
                    {/* Desktop Login Button */}
                    <div className={login.continueDesktop}>
                        <button>Login to Your Account</button>
                    </div>
                    {/* OR */}
                    <div className={login.or}>
                        <span></span>
                        <p>OR</p>
                        <span></span>
                    </div>
                    <button className={login.signBtn} onClick={userLogin}>
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
    </div>
  )
}

export default Login