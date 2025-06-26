import Header from "../components/Header";
import Footer from "../components/Footer";
import { VenueOwner, EventNeeder } from "../assets/index";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {
  const [accountType, setAccountType] = useState(null);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (accountType) {
      navigate(`/profile-setup/${accountType}`);
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen h-fit">
      <Header />
      <main className="flex flex-col items-center p-14 max-md:p-6 max-sm:p--4">
        <h1 className="text-2xl ">Select an Account Type</h1>
        <p className="text-lg text-[#757575] text-center mt-1 mb-10">
          Selecting the right account type helps us tailor your experience to
          meet your specific needs.
        </p>
        <div className="flex gap-20 max-lg:gap-5 max-lg:flex-col max-lg:items-center lg:justify-center w-full mb-4">
          <div
            className={`border h-80 gap-1 w-1/2 max-w-[600px] cursor-pointer max-lg:w-full flex flex-col items-center justify-center text-center p-4 rounded-lg ${accountType === "event-needer" ? "border-[#005F61] bg-[#F6FFFF]" : "border-[#D1D1D1]"}`}
            onClick={() => setAccountType("event-needer")}
          >
            <img src={EventNeeder} alt="" className="w-full max-w-56 mb-6" />
            <h2 className="text-xl font-semibold">Event Service Needer</h2>
            <p className="text-md text-[#535353]">
              Suitable for people looking to organize or host an event.
            </p>
          </div>
          <div
            className={`border h-80 gap-1 w-1/2 max-w-[600px] cursor-pointer max-lg:w-full flex flex-col items-center justify-center text-center p-4 rounded-lg ${accountType === "venue-owner" ? "border-[#005F61] bg-[#F6FFFF]" : "border-[#D1D1D1]"}`}
            onClick={() => setAccountType("venue-owner")}
          >
            <img src={VenueOwner} alt="" className="w-full max-w-56 mb-6" />
            <h2 className="text-xl font-semibold">Event Venue Owner</h2>
            <p className="text-md text-[#535353] font-medium">
              Suitable for people looking to list their venues for rent.
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#005F61] cursor-pointer text-white font-semibold text-md w-52 h-13 rounded-lg mt-10"
        onClick={handleProceed} disabled={!accountType}>
          Proceed <FaArrowRightLong />
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSetup;
