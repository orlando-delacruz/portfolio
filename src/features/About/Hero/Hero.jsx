import * as S from "./Hero.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchAboutHero } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import { FaUser } from "react-icons/fa";

const Hero = () => {
  const { data: hero, loading, error, retry } = useCmsQuery(fetchAboutHero);

  if (loading) {
    return (
      <S.SectionWrapper role="banner" aria-label="Loading about hero">
        <SectionSkeleton label="Loading about hero..." lines={2} />
      </S.SectionWrapper>
    );
  }

  if (error || !hero) {
    return (
      <S.SectionWrapper role="banner" aria-label="About hero">
        <QueryError
          message={error || "About hero is not published yet."}
          onRetry={retry}
        />
      </S.SectionWrapper>
    );
  }

  return (
    <S.SectionWrapper
      $bg={hero.background?.url}
      role="banner"
      aria-labelledby="hero-heading"
    >
      <S.Overlay aria-hidden="true" />

      <S.Content>
        <S.HeadingWrapper>
          <S.Label>
            <FaUser />
            {hero.label}
          </S.Label>
          <S.Heading id="hero-heading">
            {hero.title} <S.Accent>{hero.highlight}</S.Accent>
          </S.Heading>
        </S.HeadingWrapper>
        <S.Subheading>{hero.subheading}</S.Subheading>
      </S.Content>
    </S.SectionWrapper>
  );
};

export default Hero;
