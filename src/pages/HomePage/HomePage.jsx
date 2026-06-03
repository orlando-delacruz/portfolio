import Layout from "../../components/Layout";
import HeroSection from "../../features/Home/HeroSection";
import AboutSection from "../../features/Home/AboutSection";
import ProjectsSection from "../../features/Home/ProjectsSection";
import SkillSection from "../../features/Home/SkillSection";
import ServiceSection from "../../features/Home/ServiceSection";
import ExperienceSection from "../../features/Home/ExperienceSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <SkillSection id="skills" />
      <ServiceSection id="services" />
      <ExperienceSection id="experience" />
    </Layout>
  );
};

export default HomePage;
