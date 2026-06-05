import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiClock, FiCalendar, FiUser } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import projectDetailData from "../../../data/pages/Project/projectDetail.data";
import * as S from "./ProjectDetail.styled";

/**
 * ProjectDetail
 * Rendered at /projects/:slug
 * Reads the slug param, looks up data, and renders the full case study.
 */
const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectDetailData[slug];

  /* ── Not found ── */
  if (!project) {
    return (
      <S.DetailPage>
        <S.NotFound>
          <h2>Project not found</h2>
          <p>The case study you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects" style={{ color: "var(--color-primary, #2562ea)", marginTop: "1rem" }}>
            ← Back to Projects
          </Link>
        </S.NotFound>
      </S.DetailPage>
    );
  }

  const {
    thumbnail,
    thumbnailAlt,
    title,
    category,
    duration,
    year,
    role,
    description,
    overview,
    highlights,
    techStack,
    challenges,
    links,
  } = project;

  return (
    <S.DetailPage>
      {/* ── Hero ── */}
      <S.HeroBanner aria-labelledby="detail-title">
        <BreadCrumb
          label={title}
          paths={[{ label: "Projects", href: "/projects" }]}
        />

        <S.BgGlow aria-hidden="true" />

        <S.HeroInner>
          {/* Back link */}
          <S.BackLink as={Link} to="/projects" aria-label="Back to all projects">
            <FiArrowLeft aria-hidden="true" /> All Projects
          </S.BackLink>

          {/* Category badge */}
          <S.CategoryBadge>{category}</S.CategoryBadge>

          {/* Title */}
          <S.HeroTitle id="detail-title">{title}</S.HeroTitle>

          {/* Short description */}
          <S.HeroDescription>{description}</S.HeroDescription>

          {/* Meta pills */}
          <S.MetaRow>
            <S.MetaPill>
              <FiClock aria-hidden="true" />
              <span className="label">Duration</span>
              <span className="value">{duration}</span>
            </S.MetaPill>
            <S.MetaPill>
              <FiCalendar aria-hidden="true" />
              <span className="label">Year</span>
              <span className="value">{year}</span>
            </S.MetaPill>
            <S.MetaPill>
              <FiUser aria-hidden="true" />
              <span className="label">Role</span>
              <span className="value">{role}</span>
            </S.MetaPill>
          </S.MetaRow>

          {/* CTA buttons */}
          <S.HeroCTA>
            <a
              className="btn-primary"
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${title}`}
            >
              <FiExternalLink aria-hidden="true" /> Live Demo
            </a>
            <a
              className="btn-ghost"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title}`}
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          </S.HeroCTA>
        </S.HeroInner>
      </S.HeroBanner>

      {/* ── Body ── */}
      <S.Body>
        {/* Full project screenshot */}
        <S.ScreenshotWrapper>
          <img
            src={thumbnail}
            alt={thumbnailAlt}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </S.ScreenshotWrapper>

        {/* Overview + Highlights */}
        <S.DetailGrid>
          {/* Overview */}
          <div>
            <S.SectionLabel>Overview</S.SectionLabel>
            <S.SectionHeading>About This Project</S.SectionHeading>
            <S.BodyText>{overview}</S.BodyText>
          </div>

          {/* Highlights */}
          <div>
            <S.SectionLabel>Highlights</S.SectionLabel>
            <S.SectionHeading>Key Features</S.SectionHeading>
            <S.HighlightList aria-label="Project highlights">
              {highlights.map((h) => (
                <S.HighlightItem key={h}>
                  <BsCheckCircleFill aria-hidden="true" />
                  {h}
                </S.HighlightItem>
              ))}
            </S.HighlightList>
          </div>
        </S.DetailGrid>

        {/* Tech Stack */}
        <div>
          <S.SectionLabel>Stack</S.SectionLabel>
          <S.SectionHeading>Technologies Used</S.SectionHeading>
          <S.TechGrid role="list" aria-label="Technologies used">
            {techStack.map(({ name, purpose }) => (
              <S.TechRow key={name} role="listitem">
                <span className="tech-name">{name}</span>
                <span className="tech-purpose">{purpose}</span>
              </S.TechRow>
            ))}
          </S.TechGrid>
        </div>

        {/* Challenges */}
        <div>
          <S.SectionLabel>Process</S.SectionLabel>
          <S.SectionHeading>Challenges & Solutions</S.SectionHeading>
          <S.ChallengeList>
            {challenges.map(({ title: ct, body }) => (
              <S.ChallengeCard key={ct}>
                <h3>{ct}</h3>
                <p>{body}</p>
              </S.ChallengeCard>
            ))}
          </S.ChallengeList>
        </div>
      </S.Body>
    </S.DetailPage>
  );
};

export default ProjectDetail;