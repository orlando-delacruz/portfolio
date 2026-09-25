import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchAboutStory } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import HygraphRichText from "../../../components/RichText";
import * as S from "./Story.styled";

const Story = () => {
  const { data: story, loading, error, retry , ref } = useCmsQuery(fetchAboutStory, { defer: true });

  if (loading) {
    return (
      <S.Section ref={ref} aria-label="Loading story">
        <SectionSkeleton label="Loading story..." lines={4} />
      </S.Section>
    );
  }

  if (error || !story) {
    return (
      <S.Section ref={ref} aria-label="Story">
        <QueryError
          message={error || "Story content is not published yet."}
          onRetry={retry}
        />
      </S.Section>
    );
  }

  const {
    pretitle,
    title: heading,
    highlight: headingHighlight,
    image,
    imageAlt,
    paragraphs,
  } = story;

  return (
    <S.Section ref={ref} aria-labelledby="story-heading">
      <S.Container>
        <S.ImageWrapper>
          <S.Image
            src={image?.url}
            alt={imageAlt || "About me"}
            width={image?.width || 600}
            height={image?.height || 700}
            loading="lazy"
            decoding="async"
          />
        </S.ImageWrapper>

        <S.Content>
          <S.HeadingWrapper>
            <SectionHeading
              pretitle={pretitle}
              title={heading}
              highlight={headingHighlight}
              arialabel="story-heading"
              id="story-heading"
            />
          </S.HeadingWrapper>

          <S.Paragraphs>
            <HygraphRichText content={paragraphs?.raw} />
          </S.Paragraphs>
        </S.Content>
      </S.Container>
    </S.Section>
  );
};

export default Story;
