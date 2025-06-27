import React from "react";

const Profile_Sidebar = () => {
  return (
    <div className="h-full w-[280px] border border-[#D1D1D1] rounded-lg p-4">
      <h4 className="text-lg ">Profile Setup Progress</h4>
      <div className="mt-2 flex flex-col font-semibold text-md gap-2 text-[#A3A3A3]">
        <div className="text-[#8C4703]">
          <span className="flex items-center justify-between">
            <p>Personal Details</p>
            <input type="checkbox" className="checkbox" />
          </span>
          <hr className="block h-10 bg-[#A3A3A3] w-0.5 border-none " />
        </div>
        <div>
          <span className="flex items-center justify-between">
            <p>Nin Verification</p>
            <input type="checkbox" className="checkbox" />
          </span>
          <hr className="block h-10 bg-[#A3A3A3] w-0.5 border-none " />
        </div>{" "}
        <div>
          <span className="flex items-center justify-between">
            <p>ID Document Upload</p>
            <input type="checkbox" className="checkbox" />
          </span>
          <hr className="block h-10 bg-[#A3A3A3] w-0.5 border-none " />
        </div>{" "}
        <div>
          <span className="flex items-center justify-between">
            <p>Security Questions</p>
            <input type="checkbox" className="checkbox" />
          </span>
          <hr className="block h-10 bg-[#A3A3A3] w-0.5 border-none " />
        </div>
        <div>
          <span className="flex items-center justify-between">
            <p>Preview</p>
            <input type="checkbox" className="checkbox" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile_Sidebar;
