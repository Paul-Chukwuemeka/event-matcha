import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroImg from "../assets/Frame-329.png";
import Vector from "../assets/Vector 7.png";

const Landing = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen h-fit">
      <Header />
      <main className="w-full">
        <section className="flex max-lg:flex-col p-10 ">
          <div className="w-1/2 max-lg:w-full p-10 px-[8%] flex flex-col gap-5 items-start justify-start">
            <h1 className="text-[3em] font-semibold">
              Your Ultimate Destination for Booking and Showcasing{" "}
              <span className="text-[#E67505]">
                <div className="inline relative ">
                  <span className="relative z-2">Premium</span>{" "}
                  <img src={Vector} className="absolute z-0 top-0 -left-0" />{" "}
                </div>{" "}
                Event Services
              </span>
            </h1>
            <p className="text-lg text-[#757575] max-w-[600px]">
              Our platform caters to both service providers showcasing their
              expertise and event needers seeking top-notch services. Connect,
              book, and showcase with ease and sophistication.
            </p>
            <button className="flex items-center gap-2 bg-[#005F61] text-white font-extrabold px-6 py-3 rounded-lg shadow-[0_0_5px] shadow-[#00000029]">
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
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
