// src\features\Project\ProjectGrid\ProjectCard.jsx
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import * as S from "./ProjectGrid.styled";

/**
 * ProjectCard — stripped to: thumbnail, meta, title, description, footer.
 * Highlights & tech stack live on the Case Study / Detail page.
 * Cards are equal-height via CSS grid + flex column on CardWrapper.
 */
const ProjectCard = ({ project, index }) => {
  const { thumbnail, thumbnailAlt, title, category, duration, description, links } = project;

  return (
    <S.CardWrapper $index={index} aria-label={title}>
      {/* Thumbnail */}
      <S.Thumbnail>
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          loading={index < 2 ? "eager" : "lazy"}
          fetchpriority={index < 2 ? "high" : undefined}
          decoding="async"
          width="638"
          height="359"
        />
      </S.Thumbnail>

      <S.CardContent>
        {/* Head */}
        <S.CardHead>
          <h3 className="card-title">{title}</h3>
          <dl className="meta" aria-label={`${title} metadata`}>
            <div>
              <dt className="sr-only">Category</dt>
              <dd className="category">{category}</dd>
            </div>
            <GoDotFill className="sep" aria-hidden="true" />
            <div>
              <dt className="sr-only">Duration</dt>
              <dd>{duration}</dd>
            </div>
          </dl>
        </S.CardHead>

        {/* Description — flex:1 pushes footer to bottom */}
        <S.CardBody>{description}</S.CardBody>

        <S.Divider />

        {/* Footer */}
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
              className="btn"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title}`}
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <Link
              className="btn primary"
              to={links.caseStudy}
              aria-label={`Case study for ${title}`}
            >
              <GiOpenBook aria-hidden="true" /> Case Study
            </Link>
          </div>
        </S.CardFooter>
      </S.CardContent>
    </S.CardWrapper>
  );
};

export default ProjectCard;