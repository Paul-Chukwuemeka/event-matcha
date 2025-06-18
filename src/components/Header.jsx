import logo from "../assets/Logo.png";
import { BiSearch } from "react-icons/bi";
import { FaRegUser, FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-evenly max-lg:justify-start p-4 shadow-[10px_10px_10px] shadow-[#f7820509]">
      <img src={logo} alt="logo" className="w-54" />
      {/* <div className="flex border items-center p-2  bg-[#F4F4F4] border-[#D1D1D1] w-[600px] rounded-lg gap-1">
        <BiSearch className="text-xl text-[#A3A3A3] "/>
        <input type="text" placeholder="Search anything..." className="flex-1" />
      </div> */}

      <ul className="flex w-1/4 max-lg:hidden gap-4 *:flex-nowrap *:text-nowrap text-lg justify-between *:hover:text-[#005F61] *:cursor-pointer ">
        <li>Home</li>
        <li>About</li>
        <li className="flex items-center gap-1">Services <FaAngleDown/></li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      {/* <div className="flex gap-2">
        <button className="p-2 cursor-pointer bg-[#F4F4F4] rounded-full">
          <FaRegUser className="text-lg" />
        </button>
        <button>
          <FaAngleDown />
        </button>
      </div> */}
      <div className="gap-10 flex max-lg:hidden">
        <button className="text-[#005F61] cursor-pointer  text-lg font-semibold">Login</button>
        <button className="bg-[#005F61] cursor-pointer text-lg font-semibold p-2.5 rounded-lg text-white">Sign Up for Free</button>
      </div>
    </div>
  );
};

export default Header;
