import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Profile_Setup_For_Needer from "./Pages/Profile_Setup_Needer";
import Profile_Setup_Owner from "./Pages/Profile_Setup_Owner";
import ProfileSetup from "./Pages/Profile_Setup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/profile-setup/event-needer" element={<Profile_Setup_For_Needer />} />
      <Route path="/profile-setup/venue-owner" element={<Profile_Setup_Owner />} />
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route path="*" element={<Landing />} />

    </Routes>
  );
};

export default AppRoutes;
