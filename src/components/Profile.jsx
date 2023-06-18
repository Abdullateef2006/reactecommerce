import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <>
            <section class="main">
                <div class="profile-card">
                    <div class="image">
                        <img src={require('../Assets/shoe5.jpg')} alt="" class="profile-pic" />
                    </div>
                    <div class="data">
                        <h2>Abdullateef Ojugbele</h2>
                        {/* <span>Developer & Designer</span> */}
                    </div>
                    <div class="row">
                        {/* <div class="info">
                            <h3>Following</h3>
                            <span>120</span>
                        </div>
                        <div class="info">
                            <h3>Followers</h3>
                            <span>5000</span>
                        </div>
                        <div class="info">
                            <h3>Posts</h3>
                            <span>209</span>
                        </div> */}
                        <div className='personalInfo'>
                            <div className='Edit'>
                                <h3>   Full Name : Ojugbele Abdullateef</h3>
                                <i className="fa fa-pencil fa-lg" id='pencilIcon'></i>
                            </div>
                            <div className='Edit'>
                                <h3>   Email : ojugbele@gmail.com</h3>
                                <i className="fa fa-pencil fa-lg" id='pencilIcon'></i>
                            </div>  <div className='Edit'>
                                <h3>   Phone Number : +2348089754705</h3>
                                <i className="fa fa-pencil fa-lg" id='pencilIcon'></i>
                            </div> 

                        </div>
                    </div>
                    <div class="buttons">
                        <a href="#" class="btn">Save Changes</a>
                        {/* <a href="#" class="btn">Follow Me</a> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile