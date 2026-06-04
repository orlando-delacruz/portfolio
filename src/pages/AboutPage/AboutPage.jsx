import SEO from "../../components/common/SEO";
import Hero from "../../features/About/Hero";
import Story from "../../features/About/Story";
import QuickFacts from "../../features/About/QuickFacts";
import WhatIDo from "../../features/About/WhatIDo";
import MyApproach from "../../features/About/MyApproach";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About | Orlando Dela Cruz"
        description="Learn more about Orlando Dela Cruz, a Front-End Web Developer specializing in React, JavaScript, Tailwind CSS, and modern web development."
        path="/about"
      />

      <Hero />
      <Story />
      <QuickFacts />
      <WhatIDo />
      <MyApproach />
    </>
  );
};

export default AboutPage;
