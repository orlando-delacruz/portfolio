import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import BlogPage from "../pages/BlogPage";
// import ComingSoon from "../pages/ComingSoon";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}
