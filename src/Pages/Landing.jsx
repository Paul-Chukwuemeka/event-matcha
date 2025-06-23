import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroImg from "../assets/Frame-329.png";
import Vector from "../assets/Vector 7.png";
import PeopleImg from "../assets/people.png";
import Person from "../assets/person.png";
import Planner from "../assets/planner.png";
import BookMark from "../assets/bookmark.png";

const Landing = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen h-fit">
      <Header />
      <main className="w-full">
        <section className="flex max-lg:flex-col p-10 max-md:px-4  ">
          <div className="w-1/2 max-lg:w-full p-10 px-[8%] max-md:px-0 max-lg:px-10 flex flex-col gap-5 items-start justify-start">
            <h1 className="text-[3em] max-lg:text-[2.5em] max-md:text-[2em] font-bold max-lg:text-center">
              Your Ultimate Destination for Booking and Showcasing{" "}
              <span className="text-[#E67505]">
                <div className="inline relative ">
                  <span className="relative z-2">Premium</span>{" "}
                  <img src={Vector} className="absolute z-0 top-0 -left-0" />{" "}
                </div>{" "}
                Event Services
              </span>
            </h1>
            <p className="text-lg text-[#757575] max-w-[600px] max-lg:text-center">
              Our platform caters to both service providers showcasing their
              expertise and event needers seeking top-notch services. Connect,
              book, and showcase with ease and sophistication.
            </p>
            <button className="flex items-center gap-2 max-lg:self-center bg-[#005F61] text-white font-extrabold px-8 py-4 rounded-lg shadow-[0_0_5px] shadow-[#00000029]">
              Get Started <FaArrowRightLong />
            </button>
          </div>
          <div className="w-1/2 max-lg:w-full flex items-center justify-center ">
            <img
              src={HeroImg}
              alt="Hero img"
              className="w-full max-w-[600px] rounded-xl"
            />
          </div>
        </section>
        <section className="flex max-lg:flex-col bg-[#FFF8F0] p-25 max-lg:p-10 max-md:px-4 justify-center gap-4 my-30  ">
          <div className=" lg:border-r-2 max-lg:border-b-2 border-[#D1D1D1] flex flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={PeopleImg} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">13k+</h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">Event Needers</p>
            </div>
          </div>
          <div className=" lg:border-r-2 max-lg:border-b-2 border-[#D1D1D1] flex flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={Person} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">4.5k+</h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">Service Providers</p>
            </div>
          </div>
          <div className=" lg:border-r-2 max-lg:border-b-2 border-[#D1D1D1] flex flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={Planner} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">3k+</h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">Event Planners</p>
            </div>
          </div>
          <div className=" border-[#D1D1D1] flex flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={BookMark} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">34.5k+</h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">Successful Bookings</p>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
