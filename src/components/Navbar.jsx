import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import { SidebarData2 } from './Sidebardata';
import Products from './Products';
import { Routes, Route } from 'react-router-dom';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });


  const [production, setProduction] = useState("")

  // const search = () => {
  //   return Productdata.filter((item) => item.brand.toLowerCase().includes(production) || item.title.toLowerCase().includes(production))
  // }
  return (
    <>
      <div className='navBar'>
        <div className='navLeft'>
          <i className="fa fa-bars fa-lg" onClick={showSidebar}></i>
          <img src={require('../Assets/580-1.png')} alt="" id="logo" className='logo'/>
        </div>
        <div className='navCenter'>
          <input type="search" placeholder='Search products, brands and cartegories' id='Search' onChange={(e) => setProduction(e.target.value)} />
          <button className='btn'>SEARCH</button>
        </div>
        <div className='navRight'>
          <ul className='Options'>
          <li className='opt'>
              <i className="fa fa-home fa-lg"></i>
              <span>Home</span>
            </li>
            <li className='opt'>
              <i className="fa fa-user fa-lg"></i>
              <span>Account</span>
            </li>
            <li className='opt'>
              <i class="fa-solid fa-circle-question fa-lg"></i>
              <span>Help</span>
            </li>
            <li className='opt'>
              <i class="fa-solid fa-cart-shopping fa-lg"></i>
              <span>Cart</span>
            </li>
            <li className='opt' ref={menuRef}>
              <i class="fa-solid fa-caret-down fa-lg" onClick={() => { setOpen(!open) }}></i>
              <span>More Options</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
        <ul>
          <DropdownItem icon={"fa fa-user"} text={"My Profile"} />
          <DropdownItem icon={"fa-solid fa-right-to-bracket"} text={"Login"} />
          <DropdownItem icon={"fa-solid fa-right-from-bracket"} text={"Logout"} />
          <DropdownItem icon={"fa fa-cog"} text={"Settings"} />

        </ul>
      </div>
      <div className={sidebar ? 'sideBarOpen' : 'sideBar'}>
        <div className='navLeft'>
          <i className="fa fa-bars fa-lg" onClick={showSidebar}></i>
          <img src={require('../Assets/580-1.png')} alt="" id="logo" />
        </div>
        <div className='sidebarOptions'>
          {SidebarData2.map((item, index) => {
            return (

              <>
                <div className='sidebarBox'>
                  <div key={index} className={item.cName}>
                    <NavLink to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <Routes>
      <Route path='/' element={<Products produce={production}/>} />


      </Routes>



       


    </>
  )
}


function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <i className={props.icon}></i>
      <a href='#'> {props.text} </a>
    </li>
  );
}


export default Navbar