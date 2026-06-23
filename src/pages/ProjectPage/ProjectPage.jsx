import Hero from "../../features/Project/Hero";
import Overview from "../../features/Project/Overview";
import ProjectsGrid from "../../features/Project/ProjectGrid";
import CallToAction from "../../components/CallToAction";

const ProjectPage = () => {
  return (
    <>
      <Hero />
      <Overview />
      <ProjectsGrid />
      <CallToAction />
    </>
  );
};

export default ProjectPage;
