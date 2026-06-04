import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";
import ComingSoon from "../pages/ComingSoon";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<ComingSoon pageName="About Page" />} />
      <Route path="/projects" element={<ComingSoon pageName="Project Page" />} />
      <Route path="/blogs" element={<ComingSoon pageName="Blog Page" />} />
    </Routes>
  );
}
