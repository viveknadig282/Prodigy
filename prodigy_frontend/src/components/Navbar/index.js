import React from 'react'
import {Nav, NavLink, NavBtn, NavBtnLink} from './NavbarElement'

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
                  <img src="logo50.png" alt="Logo"></img>
              </NavLink>
              <NavBtn>
              <NavBtnLink to="/listing">Add Course</NavBtnLink>
              </NavBtn>
              <NavBtn>
              <NavBtnLink to="/about">About</NavBtnLink>
              </NavBtn>
              <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
              <NavBtn>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
              </NavBtn>
              
              

          </Nav>
        </>
    )
}

export default Navbar;
