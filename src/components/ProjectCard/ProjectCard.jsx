import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import ProjectLinkButton from "../ProjectLinkButton";
import { getGitHubLabel } from "../../utils/githubUtils";
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

  const thumbnailUrl = thumbnail?.url || "/images/placeholder.webp";
  const altText = thumbnailAlt || `${title} thumbnail`;

  const fallbackGitHub = links?.github || githubUrl;
  const fallbackLive = links?.live || liveDemoUrl;

  // Use githubVisibility directly; fallback based on URL existence
  const gitVisibility =
    githubVisibility || (fallbackGitHub ? "Public" : "None");
  const liveVisibility =
    liveDemoVisibility || (fallbackLive ? "Available" : "Unavailable");

  const handleCardClick = () => navigate(`/projects/${slug}`);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };
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
          <div className="action-buttons" onClick={stopPropagation}>
            <ProjectLinkButton
              url={fallbackLive}
              visibility={liveVisibility}
              label="Live Demo"
              icon={FaExternalLinkAlt}
              variant="primary"
              statusText={liveVisibility === "Coming Soon" ? "Soon" : ""}
              tooltipText={
                liveVisibility === "Coming Soon" ? "Coming Soon" : ""
              }
            />

            <ProjectLinkButton
              url={fallbackGitHub}
              visibility={gitVisibility}
              label={getGitHubLabel(gitVisibility)}
              icon={FaGithub}
              variant="ghost"
              statusText={
                gitVisibility === "Private"
                  ? "Private"
                  : gitVisibility === "None"
                    ? "None"
                    : ""
              }
              tooltipText={
                gitVisibility === "Private"
                  ? "This repository is private and cannot be viewed publicly."
                  : gitVisibility === "None"
                    ? "No GitHub repository is available for this project."
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
