import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import HeroSection from "../../features/Home/HeroSection";
import AboutSection from "../../features/Home/AboutSection";
import ProjectsSection from "../../features/Home/ProjectsSection";
import SkillSection from "../../features/Home/SkillSection";
import ServiceSection from "../../features/Home/ServiceSection";
import ExperienceSection from "../../features/Home/ExperienceSection";
import TestimonialSection from "../../features/Home/TestimonialSection";
import BlogSection from "../../features/Home/BlogSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (!scrollTarget) return;

    // Small delay to ensure the DOM is fully rendered
    const timeoutId = setTimeout(() => {
      const target = document.getElementById(scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <Layout>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <SkillSection id="skills" />
      <ServiceSection id="services" />
      <ExperienceSection id="experience" />
      <TestimonialSection id="testimonials" />
      <BlogSection id="blogs" />
    </Layout>
  );
};

export default HomePage;