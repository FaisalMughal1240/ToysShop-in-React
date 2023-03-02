import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
function Header(props) {
const navigate =useNavigate()
   
  
  return (
    <>
      <div className="home">
        <NavLink>
          <AiOutlineHome />
          Main Page
          <MdKeyboardArrowRight />
          <span>Catalog</span>
        </NavLink>
        <NavLink >Compare Product <MdKeyboardArrowRight /></NavLink>
        <NavLink >Wishlist  <MdKeyboardArrowRight /></NavLink>
        <NavLink to='/checkout' >Cart Products <MdKeyboardArrowRight onClick={()=>navigate('/checkout')}/></NavLink>
      </div>
    </>
  );
}

export default Header;
