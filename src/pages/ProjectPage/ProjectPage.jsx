import SEO from "../../components/common/SEO";
import Hero from "../../features/Project/Hero";
import Overview from "../../features/Project/Overview";
import ProjectsGrid from "../../features/Project/ProjectGrid";

const ProjectPage = () => {
  return (
    <>
      <SEO
        title="Projects | Orlando Dela Cruz"
        description="Explore projects by Orlando Dela Cruz — responsive React applications, freelance work, and academic builds with modern tooling."
        path="/projects"
      />

      <Hero />
      <Overview />
      <ProjectsGrid />
    </>
  );
};

export default ProjectPage;
