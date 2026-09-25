import SectionHeading from "../../../components/SectionHeading";
import ViewAll from "../../../components/Buttons/ViewAll";
import ProjectCard from "../../../components/ProjectCard";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchProjectsSection } from "../../../services/hygraph";
import { QueryError } from "../../../components/QueryState";
import { staggerContainer, fadeIn, viewport } from "../../../animations";
import * as S from "./ProjectsSection.styled";

const ProjectsSection = ({ id }) => {
  const { data, loading, error, retry , ref } = useCmsQuery(fetchProjectsSection, { defer: true });
  const projects = data?.projects || [];
  const heading = data?.heading;

  if (loading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <S.SkeletonGrid aria-label="Loading featured projects">
          {[0, 1, 2].map((key) => (
            <S.SkeletonCard key={key} aria-hidden="true" />
          ))}
        </S.SkeletonGrid>
      </S.SectionWrapper>
    );
  }

  if (error || !heading) {
    return (
      <S.SectionWrapper ref={ref} id={id}>
        <QueryError
          message={error || "Projects content is not published yet."}
          onRetry={retry}
        />
      </S.SectionWrapper>
    );
  }

  return (
    <S.SectionWrapper ref={ref} id={id} aria-labelledby="projects-heading">
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel="projects-heading"
        id="projects-heading"
      />

      {projects.length === 0 ? (
        <S.EmptyState variants={fadeIn} initial="hidden" animate="visible">
          No featured projects yet. Please mark projects as featured in Hygraph.
        </S.EmptyState>
      ) : (
        <S.ContentGrid
          role="list"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport(0.15)}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </S.ContentGrid>
      )}

      {projects.length > 0 && (
        <ViewAll
          link="/projects"
          label="View All Projects"
          aria-label="View all projects"
        />
      )}
    </S.SectionWrapper>
  );
};

export default ProjectsSection;
