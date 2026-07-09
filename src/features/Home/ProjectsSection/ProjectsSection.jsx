import SectionHeading from "../../../components/SectionHeading";
import ViewAll from "../../../components/Buttons/ViewAll";
import * as S from "./ProjectsSection.styled";
import projects, { projectsHeading, viewAll } from "../../../data/project";
import ProjectCard from "../../../components/ProjectCard";

const featuredProjects = projects.slice(0, 4);

const ProjectsSection = ({ id }) => {
  return (
    <S.SectionWrapper id={id} aria-labelledby={projectsHeading.arialabel}>
      <SectionHeading
        pretitle={projectsHeading.pretitle}
        title={projectsHeading.title}
        highlight={projectsHeading.highlight}
        arialabel={projectsHeading.arialabel}
      />

      <S.ContentGrid role="list">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </S.ContentGrid>

      <ViewAll
        link={viewAll.link}
        label={viewAll.label}
        aria-label="View all projects"
      />
    </S.SectionWrapper>
  );
};

export default ProjectsSection;
