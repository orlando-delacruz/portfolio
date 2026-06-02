import SectionHeading from "../../../components/SectionHeading";
import projectsData from "../../../data/pages/Home/projectsData";
import ViewAll from "../../../components/Buttons/ViewAll";
import * as S from "./ProjectsSection.styled";
import { GoDotFill } from "react-icons/go";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const { heading, project, viewAll } = projectsData;

const ProjectsSection = ({ id }) => {
  return (
    <S.SectionWrapper id={id} aria-labelledby={heading.arialabel}>
      <SectionHeading
        pretitle={heading.pretitle}
        title={heading.title}
        highlight={heading.highlight}
        arialabel={heading.arialabel}
      />

      <S.ContentGrid role="list">
        {project.map(({ id, thumbnail, title, category, progress, description, github, live, view }, index) => (
          <S.ProjectCard key={id} role="listitem" as="article">
            <S.Thumbnail>
              <img
                src={thumbnail}
                alt={`${title} project thumbnail`}
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
                    <dd className="progress">{progress}</dd>
                  </div>
                </dl>
              </S.CardHead>
              <S.CardBody aria-label={`Description: ${description}`}>
                {description}
              </S.CardBody>

              <S.CardFooter>
                <a
                  className="live-demo"
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live Demo for ${title}`}
                >
                  Live Demo <FaExternalLinkAlt aria-hidden="true" />
                </a>

                <div className="action-buttons">
                  <a
                    className="github-link"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${title}`}
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                  <a
                    className="view-link"
                    href={view}
                    aria-label={`View Case Study for ${title}`}
                  >
                    <GiOpenBook aria-hidden="true" /> View Case Study
                  </a>
                </div>
              </S.CardFooter>
            </S.CardContent>
          </S.ProjectCard>
        ))}
      </S.ContentGrid>

      <ViewAll
        link={viewAll.link}
        target={viewAll.target}
        rel={viewAll.rel}
        label={viewAll.label}
        aria-label="View all projects"
      />
    </S.SectionWrapper>
  );
};

export default ProjectsSection;