import { useState, useEffect } from "react";
import SectionHeading from "../../../components/SectionHeading";
import ViewAll from "../../../components/Buttons/ViewAll";
import ProjectCard from "../../../components/ProjectCard";
import Loading from "../../../components/Loading";
import { fetchFeaturedProjects } from "../../../services/hygraph";
import { staggerContainer, fadeIn, viewport } from "../../../animations";
import * as S from "./ProjectsSection.styled";

const ProjectsSection = ({ id }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeaturedProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchFeaturedProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to load featured projects.");
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProjects();
  }, []);

  if (loading) {
    return (
      <S.SectionWrapper id={id}>
        <Loading fullPage text="Loading featured projects..." />
      </S.SectionWrapper>
    );
  }

  if (error) {
    return (
      <S.SectionWrapper id={id}>
        <S.ErrorState variants={fadeIn} initial="hidden" animate="visible">
          {error}
        </S.ErrorState>
      </S.SectionWrapper>
    );
  }

  if (projects.length === 0) {
    return (
      <S.SectionWrapper id={id}>
        <S.EmptyState variants={fadeIn} initial="hidden" animate="visible">
          No featured projects yet. Please mark projects as featured in Hygraph.
        </S.EmptyState>
      </S.SectionWrapper>
    );
  }

  return (
    <S.SectionWrapper id={id} aria-labelledby="projects-heading">
      <SectionHeading
        pretitle="Featured Projects"
        title="My Projects"
        highlight="Showcase"
        arialabel="projects-heading"
      />

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

      <ViewAll
        link="/projects"
        label="View All"
        aria-label="View all projects"
      />
    </S.SectionWrapper>
  );
};

export default ProjectsSection;
