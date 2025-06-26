import logo from "../assets/Footer-Logo.png";
import chatBubble from "../assets/Chat burble.png";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { PiTiktokLogoFill } from "react-icons/pi";
import { IoIosChatboxes } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#005F61] w-full py-10 px-20 max-lg:px-10 max-md:px-6">
      <section className="flex justify-between flex-wrap max-md:flex-col p-6 space-x-10 space-y-10">
        <div className="flex flex-col gap-4 w-fit min-w-75">
          <img src={logo} alt="logo" className="w-60" />
          <p className="text-white text-lg font-medium max-w-[430px]">
            Connect, book, and showcase event services with ease and
            sophistication.
          </p>
        </div>
        <ul className="text-white flex flex-col gap-3 text-lg">
          <li className="font-extrabold">Quick Links</li>
          <li>Home</li>
          <li className="flex items-center gap-1">
            Our Services <FaAngleDown />
          </li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Releases</li>
        </ul>
        <div className="text-white flex flex-col gap-4">
          <p className="text-lg font-extrabold">Stay up to date</p>
          <p className="text-lg max-w-[450px] w-full">
            Be the first to know when we release new features, make improvements
            or when there is an offer.No spam
          </p>
          <div className="flex gap-5 max-md:flex-col">
            <input
              type="text"
              className="bg-white text-lg p-2.5 max-md:w-full placeholder:text-[#757575] text-black font-medium rounded-md"
              placeholder="Enter your email"
            />
            <button className="bg-[#F78105] w-28 p-2.5 font-extrabold rounded-lg">Subscribe</button>
          </div>
          <div className="flex mt-8 text-3xl gap-5 cursor-pointer">
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
            <PiTiktokLogoFill />
          </div>
        </div>
      </section>
      <div>
        <div className="border-[#008C8F] border h-0.5 flex items-center justify-end mt-6 cursor-pointer">
          <img src={chatBubble} alt="Chat Bubble" className="w-54" />
          <button className="bg-[#005F61] text-white shadow-[0_0_5px] shadow-[#00000029] text-xl p-4 rounded-full ">
            <IoIosChatboxes />
          </button>
        </div>
      </div>
      <div className="p-2 mt-8 flex justify-between items-center flex-wrap gap-5">
        <p className="text-[#D1D1D1]">
          © 2024 D’EventMatcha. All rights reserved.
        </p>
        <ul className="flex items-center gap-4 font-semibold text-[#D1D1D1]">
          <li>Terms</li>
          <div className="h-1.5 w-1.5 rounded-full bg-[#D1D1D1] "></div>
          <li>Privacy</li>
          <div className="h-1.5 w-1.5 rounded-full bg-[#D1D1D1] "></div>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
