import React from 'react'
// import { NavLink } from 'react-router-dom'
import toast  from 'react-hot-toast'

function Signin() {
  return (
    <>
    <div className='signin'>
    <form action="">
      <h2>Sign In</h2>
    
      <div class="form-group email">
        <label for="email">Email Address</label>
        <input type="text" id="email" placeholder="Enter your email address"/>
      </div>
      <div class="form-group password">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password"/>
        <i id="pass-toggle-btn" class="fa-solid fa-eye"></i>
      </div>
      <div class="form-group submit-btn">
        <input type="submit" value="Submit" onClick={() => toast.success("You have Sucessfully signed up")}/>
      </div>
    </form>
    </div>
    
    </>
  )
}

export default Signin