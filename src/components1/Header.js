import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="home">
      <NavLink to="/mainpage">
        <AiOutlineHome/>MAIN PAGE<MdKeyboardArrowRight/>
        <span>CATALOG</span>
        </NavLink>
      <NavLink to="/compare">COMPARE PRODUCT</NavLink>
      <NavLink to="/wishlist">WISHLIST EMPTY</NavLink>
      <NavLink to="/2products">2 PRODUCTS-1000$</NavLink>
      </div>
    </>
  )
}

export default Header
