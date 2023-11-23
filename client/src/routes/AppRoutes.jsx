import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import HomePage from "../pages/HomePage";
import LogIn from "../pages/LogIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default AppRoutes;
