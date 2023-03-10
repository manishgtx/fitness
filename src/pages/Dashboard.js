import React from 'react'
import dashboard from '../styles/dashboard.module.css'
const URL = process.env.PUBLIC_URL
const Dashboard = () => {
  return (
    <>
        <div className={dashboard.container}>
            <h2>Hey Tushar</h2>
            <div>
                {/* Bangalore Branch */}
            </div>
            <h5>Quick Actions</h5>
            <div className={dashboard.btnContainer}>
                <div className={dashboard.btnWrapper}>
                    <button className={dashboard.button}>
                        <img src={ URL + '/images/add.png'} alt="" />
                        <span>Add Members</span>
                    </button>
                    <button className={dashboard.button}>
                        <img src={ URL + '/images/usersFilled.png'} alt="" />
                        <span>Manage Staff</span>
                    </button>
                </div>
                <button className={dashboard.button}>
                        <img src={ URL + '/images/add.png'} alt="" />
                        <span>Set Up Gym branch</span>
                </button>
                <button className={dashboard.button}>
                        <img src={ URL + '/images/add.png'} alt="" />
                        <span>Potential Customer Conversion</span>
                </button>
            </div>
            <div>
                <div className={dashboard.wrapper}>
                    <h5>Sales & Revenue Details</h5>
                    <button className={dashboard.statsBtn}>
                        <span>₹41,893.90</span>
                        <span>Total Revenue</span>
                    </button>
                </div>
                <div className={dashboard.wrapper}>
                    <h5>Subscription plans</h5>
                    <button className={dashboard.button}>
                            <img src={ URL + '/images/dollarRotate.png'} alt="" />
                            <span>Manage Subscription Plans</span>
                    </button>
                </div>
            </div>
            <div className={dashboard.navigation}>
                <div>
                    <img src={ URL + '/images/home.png'} alt="" />
                    <span>Home</span>
                </div>
                <div>
                    <img src={ URL + '/images/users.png'} alt="" />
                    <span>Members</span>
                </div>
                <div>
                    <img src={ URL + '/images/document.png'} alt="" />
                    <span>Plan</span>
                </div>
                <div>
                    <img src={ URL + '/images/profile.png'} alt="" />
                    <span>Profile</span>
                </div>
            </div>

        </div>
        <div className={dashboard.desktopContainer}>
            <div className={dashboard.desktopNav}>
                <ul>
                    <li className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <span>Dashboard</span>
                    </li>
                    <li className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <span>Dashboard</span>
                    </li>
                    <li className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <span>Dashboard</span>
                    </li>
                    <li className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <span>Dashboard</span>
                    </li>
                    <li className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <span>Dashboard</span>
                    </li>
                    <li className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>
            <div className={dashboard.panel}>
                <div>
                    <div>
                        <h1>Dashboard</h1>
                        <p>Welcome back, Syeda!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard