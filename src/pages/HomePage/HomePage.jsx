import Layout from "../../components/Layout";
import HeroSection from "../../features/Home/HeroSection";
import AboutSection from "../../features/Home/AboutSection";
import ProjectsSection from "../../features/Home/ProjectsSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </Layout>
  );
};

export default HomePage;
