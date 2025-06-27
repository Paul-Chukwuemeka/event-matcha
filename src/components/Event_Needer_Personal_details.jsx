import { useState } from "react";

const Event_Needer_Personal_details = () => {
    const [isImgInput,setIsImgInput] = useState(false)
  return (
    <div className="flex-1 max-w-[824px] h-[700px]">
      <h1 className="text-lg font-semibold">Personal Details</h1>

      <h3 className="mt-4 text-lg ">Profile Picture(Optional)</h3>
      <p className="text-lg mt-2">
        Personalize your account and build trust with potential clients by
        putting a face to your name. You can edit this anytime
      </p>
    </div>
  );
};

export default Event_Needer_Personal_details;
