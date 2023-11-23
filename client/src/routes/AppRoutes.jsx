import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/DashBoard" element={<DashBoard />} />
    </Routes>
  );
};

export default AppRoutes;
