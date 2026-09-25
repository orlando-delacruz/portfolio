import * as S from "./Hero.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchProjectHeroSection } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";

const YEARS_STAT = {
  id: "stat-years",
  value: "2+",
  label: "Years Learning & Building",
  ariaLabel: "2 or more years learning and building",
};

const Hero = () => {
  const { data, loading, error, retry } = useCmsQuery(fetchProjectHeroSection);

  if (loading) {
    return (
      <S.HeroSection aria-label="Loading projects hero">
        <SectionSkeleton label="Loading projects hero..." lines={3} />
      </S.HeroSection>
    );
  }

  if (error || !data?.hero) {
    return (
      <S.HeroSection aria-label="Projects hero">
        <QueryError
          message={error || "Projects hero is not published yet."}
          onRetry={retry}
        />
      </S.HeroSection>
    );
  }

  const { hero, counts } = data;
  const { pretitle, headingMain, headingHighlight, description } = hero;

  const stats = [
    {
      id: "stat-projects",
      value: `${counts.projects}+`,
      label: "Projects Completed",
      ariaLabel: `${counts.projects} or more projects completed`,
    },
    {
      id: "stat-tech",
      value: `${counts.technologies}+`,
      label: "Technologies Used",
      ariaLabel: `${counts.technologies} or more technologies used`,
    },
    YEARS_STAT,
  ];

  return (
    <S.HeroSection aria-labelledby="project-hero-heading">
      <S.BgGlow aria-hidden="true" />

      <S.Inner>
        <S.PreTitle aria-hidden="true">{pretitle}</S.PreTitle>

        {/* Main heading */}
        <S.Heading id="project-hero-heading">
          {headingMain} <S.Highlight>{headingHighlight}</S.Highlight>
        </S.Heading>

        {/* Description */}
        <S.Description>{description}</S.Description>

        {/* Quick Stats */}
        <S.StatsRow role="list" aria-label="Quick statistics">
          {stats.map(({ id, value, label, ariaLabel }) => (
            <S.StatCard key={id} role="listitem" aria-label={ariaLabel}>
              <S.StatValue aria-hidden="true">{value}</S.StatValue>
              <S.StatLabel>{label}</S.StatLabel>
            </S.StatCard>
          ))}
        </S.StatsRow>
      </S.Inner>
    </S.HeroSection>
  );
};

export default Hero;
