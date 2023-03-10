import React from 'react'
import dashboard from '../styles/dashboard.module.css'
const URL = process.env.PUBLIC_URL
const Dashboard = ({userDetails}) => {
    console.log(userDetails)
  return (
    <>
        <div className={dashboard.container}>
            <h2>Hey {userDetails.name}</h2>
            <div className={dashboard.dropdown}>
                <p>Bangalore Branch</p>
                <img src={process.env.PUBLIC_URL + '/down.png'} alt="" />
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
                    <div className={dashboard.desktopLogoContainer}>
                        <img src={process.env.PUBLIC_URL + './images/logo.svg'} alt="" />
                        <h2>FI<span>T</span>NESS</h2>
                    </div>
                <div className={dashboard.navLinks}>
                    <div className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/Category.png'} alt="" />
                        <span>Dashboard</span>
                    </div>
                    <div className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/users.png'} alt="" />
                        <span>Members</span>
                    </div>
                    <div className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/dumbell.png'} alt="" />
                        <span>Exercise Plans</span>
                    </div>
                    <div className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/document.png'} alt="" />
                        <span>Diet Plans</span>
                    </div>
                    <div className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <span>Profile</span>
                    </div>
                    <div className={dashboard.desktopNavItem}>
                        <img src={process.env.PUBLIC_URL + '/images/Logout.png'} alt="" />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
            <div className={dashboard.panel}>
                <div className={dashboard.panelHeader}>
                    <div>
                        <h1>Dashboard</h1>
                        <p>Welcome back, {userDetails.name}!</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/images/Notification.png"} alt="" />
                        <img src={userDetails?.profile ? userDetails.profile :process.env.PUBLIC_URL + "/images/profilePhoto.png"} className={dashboard.profilePic} alt="" />
                    </div>
                </div>
                <div className={dashboard.statsAdDivider}>
                    <div className={dashboard.statistics}>
                        <div className={dashboard.statsWrapper}>
                            <div className={dashboard.singleStat}>
                                <img src={process.env.PUBLIC_URL + '/images/income.svg'} alt="" />
                                <div>
                                    <h2>$48,783.34</h2>
                                    <p>Total Revenue</p>
                                </div>
                            </div>
                            <div className={dashboard.singleStat}>
                                <img src={process.env.PUBLIC_URL + '/images/income.svg'} alt="" />
                                <div>
                                    <h2>$42,893.90</h2>
                                    <p>Total Sales</p>
                                </div>
                            </div>
                        </div>
                        <div className={dashboard.chart}>
                            <h4>Members</h4>
                            <div className={dashboard.barsWrapper}>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                                <div className={dashboard.barGroup}>
                                    <div className={dashboard.barOdd}>
                                    </div>
                                    <div className={dashboard.barEven}>
                                    </div>
                                </div>
                            </div>
                            <div className={dashboard.months}>
                                <p>Jan</p>
                                <p>Feb</p>
                                <p>Mar</p>
                                <p>Apr</p>
                                <p>May</p>
                                <p>Jun</p>
                                <p>Jul</p>
                                <p>Aug</p>
                                <p>Sep</p>
                            </div>
                        </div>
                        <div className={dashboard.membersWrapper}>
                            <div className={dashboard.active}>
                                <div className={`${dashboard.circle} ${dashboard.red}`}></div>
                                <div>Active Members</div>
                            </div>
                            <div className={dashboard.inactive}>
                                <div className={`${dashboard.circle} ${dashboard.yellow}`}></div>
                                <div>Inactive Members</div>
                            </div>
                        </div>
                    </div>
                    <div className={dashboard.ad}>
                        <h1>Coming Soon</h1>
                        <div className={dashboard.adWrapper}>
                            <div>
                                <h2>SwipeUp</h2>
                                <p>Create Customized<br/>mini plans for your<br/>clients easily</p>
                            </div>
                            <img src={process.env.PUBLIC_URL + '/images/mobile.png'} alt="" />
                        </div>
                    </div>
                </div>
                <h2 className={dashboard.quickActions}>Quick Actions</h2>
                <div className={dashboard.desktopMenuTabs}>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/menu/add.png'} alt="" />
                        <p>Add Members</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/menu/people.png'} alt="" />
                        <p>Manage Staffs</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/menu/settings.png'} alt="" />
                        <p>Set Up Gym branch</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/menu/money.png'} alt="" />
                        <p>Manage<br/>Subscription Plans</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard