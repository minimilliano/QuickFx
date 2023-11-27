import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import HomePage from "../pages/HomePage";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default AppRoutes;
