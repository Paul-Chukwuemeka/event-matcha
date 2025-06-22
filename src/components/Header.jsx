import logo from "../assets/Logo.png";
import { useState } from "react";
import { FaRegUser, FaAngleDown } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSideBar,setIsSideBar] = useState(false)
  return (
    <div className="flex w-full relative items-center justify-evenly max-lg:justify-between p-4 shadow-[10px_10px_10px] shadow-[#f7820509]">
      <img src={logo} alt="logo" className="w-54" />
      <ul className="flex  max-lg:hidden gap-4 *:flex-nowrap *:text-nowrap text-lg justify-between *:hover:text-[#005F61] *:cursor-pointer ">
        <li>Home</li>
        <li>About</li>
        <li className="flex items-center gap-1">Services <FaAngleDown/></li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      <div className="gap-10 flex max-lg:hidden">
        <button className="text-[#005F61] cursor-pointer  text-lg font-semibold">Login</button>
        <button className="bg-[#005F61] cursor-pointer text-lg font-semibold p-2.5 rounded-lg text-white">Sign Up for Free</button>
      </div>
      <button className="text-2xl duration-700 lg:hidden font-extrabold cursor-pointer p-4"
      onClick={()=>{
        setIsSideBar(!isSideBar)
      }}
      >
        {isSideBar ? <FaXmark/> : <HiBars3BottomRight />} 
      </button>
      {
        isSideBar && (
          <Sidebar/>
        )
      }
    </div>
  );
};

export default Header;
