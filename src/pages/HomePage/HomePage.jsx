import Layout from "../../components/Layout";
import HeroSection from "../../features/Home/HeroSection";
import AboutSection from "../../features/Home/AboutSection";
import ProjectsSection from "../../features/Home/ProjectsSection";
import SkillSection from "../../features/Home/SkillSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <SkillSection id="skills" />
    </Layout>
  );
};

export default HomePage;
