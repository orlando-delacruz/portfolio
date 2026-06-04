import * as S from "./Hero.styled";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import heroData from "../../../data/pages/Project/hero.data";

/**
 * ProjectHero
 * Centered hero section for the Projects page.
 * Renders breadcrumb, pre-title label, heading, description, and quick-stats cards.
 */
const Hero = () => {
  const { breadcrumb, pretitle, heading, description, stats } = heroData;

  return (
    <S.HeroSection aria-labelledby="project-hero-heading">
      {/* Background decorative layer */}
      <S.BgGlow aria-hidden="true" />

      {/* Breadcrumb — absolutely positioned via BreadCrumb.styled */}
      <BreadCrumb label={breadcrumb.label} paths={breadcrumb.paths} />

      <S.Inner>
        {/* Small label */}
        <S.PreTitle aria-hidden="true">{pretitle}</S.PreTitle>

        {/* Main heading */}
        <S.Heading id="project-hero-heading">
          {heading.main}{" "}
          <S.Highlight>{heading.highlight}</S.Highlight>
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