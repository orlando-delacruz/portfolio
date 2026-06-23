import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { hero } from "../../../data/blogs";
import * as S from "./Hero.styled";

const Hero = () => {
  const { pretitle, heading, description, stats } = hero;

  return (
    <S.HeroSection aria-labelledby="blog-hero-heading">
      <S.BgGlow aria-hidden="true" />
      <BreadCrumb items={[{ label: "Home", href: "/" }, { label: "Blogs" }]} />
      <S.Inner>
        <S.PreTitle aria-hidden="true">{pretitle}</S.PreTitle>
        <S.Heading id="blog-hero-heading">
          {heading.main} <S.Highlight>{heading.highlight}</S.Highlight>
        </S.Heading>
        <S.Description>{description}</S.Description>
        <S.StatsRow role="list" aria-label="Blog quick statistics">
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