import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import ProjectLinkButton from "../ProjectLinkButton";
import * as S from "./ProjectCard.styled";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const {
    thumbnail,
    thumbnailAlt,
    title,
    category,
    duration,
    description,
    githubUrl,
    githubVisibility,
    liveDemoUrl,
    liveDemoVisibility,
    slug,
    links,
  } = project;

  // Extract thumbnail URL and alt text
  const thumbnailUrl = thumbnail?.url || "/images/placeholder.webp";
  const altText = thumbnailAlt || `${title} thumbnail`;

  // Fallback for old data (if using JSON links)
  const fallbackGitHub = links?.github || githubUrl;
  const fallbackLive = links?.live || liveDemoUrl;
  const gitVisibility =
    githubVisibility || (fallbackGitHub ? "PUBLIC" : "NONE");
  const liveVisibility =
    liveDemoVisibility || (fallbackLive ? "AVAILABLE" : "UNAVAILABLE");

  // Navigate to project detail
  const handleCardClick = () => {
    navigate(`/projects/${slug}`);
  };

  // Keyboard support (Enter/Space)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  // Stop propagation on interactive elements to prevent card click
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <S.CardWrapper
      $index={index}
      aria-label={title}
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <S.Thumbnail>
        <img
          src={thumbnailUrl}
          alt={altText}
          loading={index < 2 ? "eager" : "lazy"}
          fetchPriority={index < 2 ? "high" : undefined}
          decoding="async"
          width="638"
          height="359"
        />
      </S.Thumbnail>

      <S.CardContent>
        <S.CardHead>
          <h3 className="card-title">{title}</h3>
          <dl className="meta" aria-label={`${title} metadata`}>
            <div className="meta-wrapper">
              <dt className="sr-only">Category: </dt>
              <dd className="category">{category}</dd>
            </div>
            <GoDotFill className="sep" aria-hidden="true" />
            <div className="meta-wrapper">
              <dt className="sr-only">Duration:</dt>
              <dd>{duration}</dd>
            </div>
          </dl>
        </S.CardHead>

        <S.CardBody>{description}</S.CardBody>

        <S.Divider />

        <S.CardFooter>
          <div className="action-buttons" onClick={stopPropagation}>
            {/* Live Demo Button — moved here, before GitHub */}
            <ProjectLinkButton
              url={fallbackLive}
              visibility={liveVisibility}
              label="Live Demo"
              icon={FaExternalLinkAlt}
              variant="primary"
              statusText={liveVisibility === "COMING_SOON" ? "Soon" : ""}
              tooltipText={
                liveVisibility === "COMING_SOON" ? "Live demo coming soon." : ""
              }
            />

            {/* GitHub Button */}
            <ProjectLinkButton
              url={fallbackGitHub}
              visibility={gitVisibility}
              label="GitHub"
              icon={FaGithub}
              variant="ghost"
              statusText={gitVisibility === "PRIVATE" ? "Private" : ""}
              tooltipText={
                gitVisibility === "PRIVATE"
                  ? "The source code for this project is private."
                  : ""
              }
            />
          </div>
        </S.CardFooter>
      </S.CardContent>
    </S.CardWrapper>
  );
};

export default ProjectCard;
