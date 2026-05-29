import Layout from "../../components/Layout";
import HeroSection from "../../features/Home/HeroSection";
import AboutSection from "../../features/Home/AboutSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
    </Layout>
  );
};

export default HomePage;
