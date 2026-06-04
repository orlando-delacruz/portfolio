import Hero from "../../features/About/Hero";
import SEO from "../../components/common/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About | Orlando Dela Cruz"
        description="Learn more about Orlando Dela Cruz, a Front-End Web Developer specializing in React, JavaScript, Tailwind CSS, and modern web development."
        path="/about"
      />

      <Hero />
    </>
  );
};

export default AboutPage;
