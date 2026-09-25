import useCmsQuery from '../../../hooks/useCmsQuery';
import { fetchContactHero } from '../../../services/hygraph';
import { QueryError, SectionSkeleton } from '../../../components/QueryState';
import * as S from './Hero.styled';

const Hero = () => {
  const { data: hero, loading, error, retry } = useCmsQuery(fetchContactHero);

  if (loading) {
    return (
      <S.HeroSection aria-label="Loading contact hero">
        <SectionSkeleton label="Loading contact hero..." lines={2} />
      </S.HeroSection>
    );
  }

  if (error || !hero) {
    return (
      <S.HeroSection aria-label="Contact hero">
        <QueryError
          message={error || "Contact hero is not published yet."}
          onRetry={retry}
        />
      </S.HeroSection>
    );
  }

  const { pretitle, title, highlight, description } = hero;

  return (
    <S.HeroSection aria-labelledby="contact-hero-heading">
      <S.BgGlow aria-hidden="true" />

      <S.Inner>
        <S.PreTitle aria-hidden="true">{pretitle}</S.PreTitle>

        <S.Heading id="contact-hero-heading">
          {title} <S.Highlight>{highlight}</S.Highlight>
        </S.Heading>

        <S.Description>{description}</S.Description>
      </S.Inner>
    </S.HeroSection>
  );
};

export default Hero;
