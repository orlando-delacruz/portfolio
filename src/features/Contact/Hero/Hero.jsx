import heroData from '../../../data/pages/Contact/hero.data';
import * as S from './Hero.styled';

const Hero = () => {
  const { pretitle, title, highlight, description } = heroData;

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