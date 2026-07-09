import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiExternalLink, FiClock, FiCalendar, FiUser } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import ProjectLinkButton from "../../../components/ProjectLinkButton";
import Loading from "../../../components/Loading";
import HygraphRichText from "../../../components/RichText";
import { fetchProjectBySlug } from "../../../services/hygraph";
import Screenshots from "../Screenshots";
import * as S from "./ProjectDetail.styled";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const loadProject = async () => {
      try {
        setLoading(true);
        const data = await fetchProjectBySlug(slug);
        if (data) {
          setProject(data);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        setError(err.message || "Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <S.DetailPage>
        <Loading fullPage text="Loading project..." />
      </S.DetailPage>
    );
  }

  if (error || !project) {
    return (
      <S.DetailPage>
        <S.NotFound>
          <h2>Project not found</h2>
          <p>{error || "The project you are looking for does not exist."}</p>
          <Link to="/projects">← Back to Projects</Link>
        </S.NotFound>
      </S.DetailPage>
    );
  }

  const {
    title,
    category,
    duration,
    year,
    role,
    description,
    overview,
    highlights,
    challenges,
    githubUrl,
    githubVisibility,
    liveDemoUrl,
    liveDemoVisibility,
    thumbnail,
    screenshots,
    technologies,
  } = project;

  const thumbnailUrl = thumbnail?.url || "/images/placeholder.webp";

  return (
    <>
      <Helmet>
        <title>{`${title} — Case Study | Orlando Dela Cruz`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <S.DetailPage>
        {/* Hero */}
        <S.HeroBanner aria-labelledby="detail-title">
          <BreadCrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: title },
            ]}
          />
          <S.BgGlow aria-hidden="true" />

          <S.HeroInner>
            <S.CategoryBadge>{category || "Uncategorized"}</S.CategoryBadge>
            <S.HeroTitle id="detail-title">{title}</S.HeroTitle>
            <S.HeroDescription>{description}</S.HeroDescription>

            <S.MetaRow>
              <S.MetaPill>
                <FiClock aria-hidden="true" />
                <span className="label">Duration</span>
                <span className="value">{duration || "—"}</span>
              </S.MetaPill>
              <S.MetaPill>
                <FiCalendar aria-hidden="true" />
                <span className="label">Year</span>
                <span className="value">{year || "—"}</span>
              </S.MetaPill>
              <S.MetaPill>
                <FiUser aria-hidden="true" />
                <span className="label">Role</span>
                <span className="value">{role || "—"}</span>
              </S.MetaPill>
            </S.MetaRow>

            <S.HeroCTA>
              <ProjectLinkButton
                url={liveDemoUrl}
                visibility={
                  liveDemoVisibility ||
                  (liveDemoUrl ? "AVAILABLE" : "UNAVAILABLE")
                }
                label="Live Demo"
                icon={FiExternalLink}
                variant="primary"
                statusText={liveDemoVisibility === "COMING_SOON" ? "Soon" : ""}
                tooltipText={
                  liveDemoVisibility === "COMING_SOON"
                    ? "Live demo coming soon."
                    : ""
                }
              />

              <ProjectLinkButton
                url={githubUrl}
                visibility={githubVisibility || (githubUrl ? "PUBLIC" : "NONE")}
                label="GitHub"
                icon={FaGithub}
                variant="ghost"
                statusText={githubVisibility === "PRIVATE" ? "Private" : ""}
                tooltipText={
                  githubVisibility === "PRIVATE"
                    ? "The source code for this project is private."
                    : ""
                }
              />
            </S.HeroCTA>
          </S.HeroInner>
        </S.HeroBanner>

        {/* Body */}
        <S.Body>
          {/* ── Technologies Used — moved above thumbnail ── */}
          <div>
            <S.SectionLabel>Stack</S.SectionLabel>
            <S.SectionHeading>Technologies Used</S.SectionHeading>
            <S.BadgeContainer>
              {technologies && technologies.length > 0 ? (
                technologies.map((tech) => (
                  <S.TechBadge key={tech.slug}>{tech.name}</S.TechBadge>
                ))
              ) : (
                <p>No technologies listed.</p>
              )}
            </S.BadgeContainer>
          </div>

          {/* ── Thumbnail ── */}
          <S.ScreenshotWrapper>
            <img
              src={thumbnailUrl}
              alt={`${title} thumbnail`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </S.ScreenshotWrapper>

          <S.DetailGrid>
            <div>
              <S.SectionLabel>Overview</S.SectionLabel>
              <S.SectionHeading>About This Project</S.SectionHeading>
              <HygraphRichText content={overview?.raw} />
            </div>
            <div>
              <S.SectionLabel>Highlights</S.SectionLabel>
              <S.SectionHeading>Key Features</S.SectionHeading>
              <HygraphRichText content={highlights?.raw} />
            </div>
          </S.DetailGrid>

          <Screenshots
            screenshots={screenshots?.map((s) => ({
              src: s.url,
              alt: s.alt || `${title} screenshot`,
            }))}
          />

          <div>
            <S.SectionLabel>Process</S.SectionLabel>
            <S.SectionHeading>Challenges &amp; Solutions</S.SectionHeading>
            <HygraphRichText content={challenges?.raw} />
          </div>
        </S.Body>
      </S.DetailPage>
    </>
  );
};

export default ProjectDetail;
