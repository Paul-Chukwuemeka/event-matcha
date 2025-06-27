import logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { FaRegUser, FaAngleDown } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLanding(location.pathname === "/");
  }, [location.pathname]);

  useEffect(() => {
    console.log(isLanding);
  }, [isLanding]);

  return (
    <div className=" flex w-full items-center justify-center bg-white shadow-[10px_10px_10px] shadow-[#f7820509]">
      <div
        className={`flex w-full relative items-center  max-lg:justify-between  p-4  ${
          isLanding ? "justify-evenly " : "justify-between max-w-[1600px]"
        }`}
      >
        <img src={logo} alt="logo" className="w-52" />
        {isLanding ? (
          <>
            <ul className="flex  max-lg:hidden gap-4 *:flex-nowrap *:text-nowrap text-lg justify-between *:hover:text-[#005F61] *:cursor-pointer ">
              <li>Home</li>
              <li>About</li>
              <li className="flex items-center gap-1">
                Services <FaAngleDown />
              </li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
            <div className="gap-10 flex max-lg:hidden">
              <button className="text-[#005F61] cursor-pointer  text-lg font-semibold">
                Login
              </button>
              <button className="bg-[#005F61] cursor-pointer text-lg font-semibold p-2.5 rounded-lg text-white">
                Sign Up for Free
              </button>
            </div>
            <button
              className="text-2xl duration-700 lg:hidden font-extrabold cursor-pointer p-4"
              onClick={() => {
                setIsSideBar(!isSideBar);
              }}
            >
              {isSideBar ? <FaXmark /> : <HiBars3BottomRight />}
            </button>
            {isSideBar && <Sidebar />}
          </>
        ) : (
          <div className="flex items-center gap-1 rounded-full shadow-[10px_10px_10px] shadow-[#f7820509] max-lg:hidden">
            <button className="h-12 w-12 rounded-full bg-[#F4F4F4] flex items-center justify-center">
              <FaRegUser className="text-2xl bg-[#F4F4F4]" />
            </button>
            <FaAngleDown className="text-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
