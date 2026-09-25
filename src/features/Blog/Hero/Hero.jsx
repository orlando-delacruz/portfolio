import * as S from "./Hero.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchBlogHeroSection } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";

const Hero = () => {
  const { data, loading, error, retry } = useCmsQuery(fetchBlogHeroSection);

  if (loading) {
    return (
      <S.HeroSection aria-label="Loading blog hero">
        <SectionSkeleton label="Loading blog hero..." lines={3} />
      </S.HeroSection>
    );
  }

  if (error || !data?.hero) {
    return (
      <S.HeroSection aria-label="Blog hero">
        <QueryError
          message={error || "Blog hero is not published yet."}
          onRetry={retry}
        />
      </S.HeroSection>
    );
  }

  const { hero, counts } = data;
  const { pretitle, headingMain, headingHighlight, description } = hero;

  const stats = [
    {
      id: "stat-articles",
      value: `${counts.blogPosts}+`,
      label: "Articles Published",
      ariaLabel: `${counts.blogPosts} or more articles published`,
    },
    {
      id: "stat-topic",
      value: "React",
      label: "Main Topic",
      ariaLabel: "Main topic is React",
    },
    {
      id: "stat-focus",
      value: "Frontend",
      label: "Primary Focus",
      ariaLabel: "Primary focus is Frontend Development",
    },
  ];

  return (
    <S.HeroSection aria-labelledby="blog-hero-heading">
      <S.BgGlow aria-hidden="true" />
      <S.Inner>
        <S.PreTitle aria-hidden="true">{pretitle}</S.PreTitle>
        <S.Heading id="blog-hero-heading">
          {headingMain} <S.Highlight>{headingHighlight}</S.Highlight>
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
