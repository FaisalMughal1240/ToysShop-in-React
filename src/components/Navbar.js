import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLanguage } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
function Navbar() {

  return (
    <>
    <div className="navigation">
      <div className="logo">
        <NavLink to='/'><span>LEGA LAND </span><span>RED BRICK</span>
       </NavLink>
      </div>
      <nav className='links'>
        <NavLink to="/toys">TOYS 
        <span style={{
          background:"red",
          marginLeft:"10px",
          color:"white",
          padding:"3px"
          }}>NEW</span>
        </NavLink>
        <NavLink to="/catalog">CATALOG</NavLink>
        <NavLink to="/character">CHARACTERS</NavLink>
        <NavLink to="/brand">BRAND</NavLink>
        <NavLink to="/language"> <MdOutlineLanguage/>ENG</NavLink>
        <NavLink to="/signup"><CgProfile/>SIGNUP</NavLink>
        {/* <NavLink to="/signin"><CgProfile/>SIGNIN</NavLink> */}
      </nav>
      </div>
    </>
  );
}

export default Navbar;
