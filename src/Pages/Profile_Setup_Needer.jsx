import Header from "../components/Header";
import { FaRegUser } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Profile_Sidebar from "../components/Profile_Sidebar";

const Profile_Setup_For_Needer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen h-fit">
      <Header />
      <main className="flex flex-1 border flex-col items-center py-12 p-6 max-md:p-6 max-sm:p-4">
        <h1 className="text-2xl font-medium">Setup your Profile</h1>
        <div className="flex items-center gap-3 mt-2 w-full h-fit ">
          <p className="text-md flex">Account Type: </p>
          <span className="flex items-center gap-1 font-medium text-sm text-[#8C4703] bg-[#FEF2E6] p-1">
            <FaRegUser />
            Event Needer
          </span>
          <button
            className="flex items-center gap-1 text-[#008C8F] cursor-pointer"
            onClick={() => navigate("/profile-setup")}
          >
            <CiEdit /> Change
          </button>
        </div>
        <div className="w-full flex-1 mt-3 flex gap-4">
          <Profile_Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Profile_Setup_For_Needer;
