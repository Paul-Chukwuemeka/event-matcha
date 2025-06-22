import { FaRegUser, FaAngleDown } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="absolute h-fit w-full bg-white top-full left-0 pt-1 p-10 px-20 flex gap-5 flex-col lg:hidden">
      <ul className="text-3xl font-light flex flex-col gap-3 *:cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li className="flex items-center gap-1">
          Services <FaAngleDown />
        </li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      <button className="bg-[#005F61]  self-center text-white text-md font-extrabold p-4 w-full max-w-[600px] rounded-lg">Sign Up For Free</button>
      <a href="" className="self-center ">
        <p className="text-xl">Login</p>
      </a>
    </div>
  );
};

export default Sidebar;
