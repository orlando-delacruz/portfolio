
import SectionHeading from "../../../components/SectionHeading";
import ViewAll from "../../../components/Buttons/ViewAll";
import * as S from "./ProjectsSection.styled";
import { GoDotFill } from "react-icons/go";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { Link } from "react-router-dom";
import projects, {
  projectsHeading,
  viewAll,
} from "../../../data/project";

// Show only first 4 on the home page
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
        {featuredProjects.map(({ id: projectId, thumbnail, thumbnailAlt, title, category, duration, description, links }, index) => (
          <S.ProjectCard key={projectId} role="listitem" as="article">
            <S.Thumbnail>
              <img
                src={thumbnail}
                alt={thumbnailAlt}
                loading={index < 2 ? "eager" : "lazy"}
                fetchpriority={index < 2 ? "high" : undefined}
                decoding="async"
                width="638"
                height="400"
              />
            </S.Thumbnail>

            <S.CardContent>
              <S.CardHead>
                <h3 className="card-title">{title}</h3>
                <dl className="meta" aria-label={`${title} metadata`}>
                  <div className="meta-item">
                    <dt className="sr-only">Category</dt>
                    <dd className="category">{category}</dd>
                  </div>
                  <GoDotFill aria-hidden="true" />
                  <div className="meta-item">
                    <dt className="sr-only">Duration</dt>
                    <dd>{duration}</dd>
                  </div>
                </dl>
              </S.CardHead>

              <S.CardBody>{description}</S.CardBody>

              <S.CardFooter>
                <a
                  className="live-demo"
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${title}`}
                >
                  Live Demo <FaExternalLinkAlt aria-hidden="true" />
                </a>

                <div className="action-buttons">
                  <a
                    className="github-link"
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${title}`}
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                  <Link
                    className="view-link"
                    to={links.caseStudy}
                    aria-label={`Case study for ${title}`}
                  >
                    <GiOpenBook aria-hidden="true" /> View Case Study
                  </Link>
                </div>
              </S.CardFooter>
            </S.CardContent>
          </S.ProjectCard>
        ))
        }
      </S.ContentGrid >

      <ViewAll
        link={viewAll.link}
        label={viewAll.label}
        aria-label="View all projects"
      />
    </S.SectionWrapper >
  );
};

export default ProjectsSection;