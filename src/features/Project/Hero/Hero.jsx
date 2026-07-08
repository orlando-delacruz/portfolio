import * as S from "./Hero.styled";
import hero from "../../../data/pages/Project/hero.data";

const Hero = () => {
  const { pretitle, heading, description, stats } = hero;

  return (
    <S.HeroSection aria-labelledby="project-hero-heading">
      <S.BgGlow aria-hidden="true" />

      <S.Inner>
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