import * as S from "./Hero.styled";
import hero from "../../../data/pages/About/hero.data";
import { FaUser } from "react-icons/fa";

const Hero = () => (
  <S.SectionWrapper
    $bg={hero.background}
    role="banner"
    aria-labelledby="hero-heading"
  >
    <S.Overlay aria-hidden="true" />

    <S.Content>
      <S.HeadingWrapper>
        <S.Label><FaUser />{hero.label}</S.Label>
        <S.Heading id="hero-heading">
          {hero.title} <S.Accent>{hero.highlight}</S.Accent>
        </S.Heading>
      </S.HeadingWrapper>
      <S.Subheading>{hero.subheading}</S.Subheading>
    </S.Content>
  </S.SectionWrapper>
);

export default Hero;