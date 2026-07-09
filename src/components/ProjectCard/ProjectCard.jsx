import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import * as S from "./ProjectCard.styled";

const ProjectCard = ({ project, index }) => {
  const {
    thumbnail,
    thumbnailAlt,
    title,
    category,
    duration,
    description,
    links,
  } = project;

  return (
    <S.CardWrapper $index={index} aria-label={title}>
      <S.Thumbnail>
        <img
          src={thumbnail}
          alt={thumbnailAlt}
          loading={index < 2 ? "eager" : "lazy"}
          fetchPriority={index < 2 ? "high" : undefined} // 👈 camelCase
          decoding="async"
          width="638"
          height="359"
        />
      </S.Thumbnail>

      <S.CardContent>
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

        <S.CardBody>{description}</S.CardBody>

        <S.Divider />

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
