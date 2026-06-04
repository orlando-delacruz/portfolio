import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import storyData from "../../../data/pages/About/story.data";
import * as S from "./Story.styled";

const Story = () => {
  const { pretitle, heading, headingHighlight, image, paragraphs } = storyData;

  return (
    <S.Section aria-labelledby="story-heading">
      <S.Container>
        <S.ImageWrapper>
          <S.Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={700}
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
            />
          </S.HeadingWrapper>

          <S.Paragraphs>
            {paragraphs.map((text, index) => (
              <S.Paragraph key={index}>{text}</S.Paragraph>
            ))}
          </S.Paragraphs>
        </S.Content>
      </S.Container>
    </S.Section>
  );
};

export default Story;