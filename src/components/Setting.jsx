import React from 'react'
import "./settings.css"
import '../App.css'
import toast from 'react-hot-toast'


function Setting() {
    return (
        <>
            <div className='settings'>
                <div className='sidebar'>
                    <div className='profile'>
                        <img src={require('../Assets/shoe5.jpg')} alt="" class="profile-pic" />
                        <h2 className='name'> Ojugbele Abdullateef</h2>
                    </div>
                    <div className='sideBarInfo'>
                        <div className='sideBarBox'>
                            <i className='fa fa-home fa-lg'></i>
                            <span>Account</span>
                        </div>
                        <div className='sideBarBox'>
                            <i className='fa fa-key fa-lg'></i>
                            <span>Password</span>
                        </div>   <div className='sideBarBox'>
                            <i className='fa fa-user fa-lg'></i>
                            <span>Security</span>
                        </div>   <div className='sideBarBox'>
                            <i className='fa fa-television fa-lg'></i>
                            <span>Application</span>
                        </div>   <div className='sideBarBox'>
                            <i className='fa fa-bell fa-lg'></i>
                            <span>Notification</span>
                        </div>
                    </div>
                </div>
                <div className='accountSetting'>
                    <form action="">
                        <h2>Account Setting</h2>
                        <div class="form-group fullname">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter your full name" />
                        </div>
                        <div class="form-group email">
                            <label for="email">Email Address</label>
                            <input type="text" id="email" placeholder="Enter your email address" />
                        </div>
                        <div class="form-group password">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                            <i id="pass-toggle-btn" class="fa-solid fa-eye"></i>
                        </div>
                        <div class="form-group date">
                            <label for="date">Birth Date</label>
                            <input type="date" id="date" placeholder="Select your date" />
                        </div>
                        <div class="form-group gender">
                            <label for="gender">Gender</label>
                            <select id="gender">
                                <option value="" selected disabled>Select your gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="form-group submit-btn">
                            <input type="submit" value="Submit" onClick={() => toast.success("You have Sucessfully signed up")} />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Setting