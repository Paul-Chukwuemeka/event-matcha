import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImg from "../assets/Frame 329.png";
import { FaArrowRightLong, FaUsers } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen h-fit w-screen">
      <Header />
      <main>
        <section className="p-20 w-full flex max-lg:flex-col max-lg:items-center gap-5">
          <div className="w-1/2 flex-1 p-10 max-lg:w-full">
            <div className="w-full max-w-[700px]  flex flex-col gap-8">
              <h2 className="text-5xl font-semibold">
                Your Ultimate Destination for Booking and Showcasing{" "}
                <span className="text-[#E67505]">
                  <span className="underline">Premium </span>Event Services
                </span>
              </h2>
              <p className="text-xl">
                Our platform caters to both service providers showcasing their
                expertise and event needers seeking top-notch services. Connect,
                book, and showcase with ease and sophistication.
              </p>
              <button className="flex items-center text-xl bg-[#005F61] w-fit text-white p-4 rounded-xl font-bold gap-2">
                Get Started <FaArrowRightLong />
              </button>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-1/3 min-w-[500px] max-lg:w-2/3 rounded-2xl"
          />
        </section>
        <section className="w-full p-[80px_100px] justify-center *:flex-1 *:flex *:justify-center *:items-center *:gap-1 flex bg-[#FFF8F0]">
          <div>
            <FaUsers className="text-4xl" />
            <div>
              <h3 className="text-xl font-bold">13k+</h3>
              <p>Event Needers</p>
            </div>
          </div>
          <div>
            <FaUsers />
            <div>
              <h3>13k+</h3>
              <p>Event Needers</p>
            </div>
          </div>
          <div>
            <FaUsers />
            <div>
              <h3>13k+</h3>
              <p>Event Needers</p>
            </div>
          </div>
          <div>
            <FaUsers />
            <div>
              <h3>13k+</h3>
              <p>Event Needers</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
