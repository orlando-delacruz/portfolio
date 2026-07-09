import * as S from "./Screenshots.styled";

const Screenshots = ({ screenshots }) => {
  if (!screenshots || screenshots.length === 0) {
    return (
      <S.EmptyState>
        <p>No screenshots available for this project.</p>
      </S.EmptyState>
    );
  }

  return (
    <S.Section aria-labelledby="screenshots-heading">
      <S.Header>
        <S.Label>Gallery</S.Label>
        <S.Heading id="screenshots-heading">Project Screenshots</S.Heading>
        <S.Description>
          A visual walkthrough of the project's key interfaces and features.
        </S.Description>
      </S.Header>

      <S.Grid role="list">
        {screenshots.map((screenshot, index) => (
          <S.ImageWrapper key={index} role="listitem">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              loading="lazy"
              decoding="async"
              width="600"
              height="337"
            />
          </S.ImageWrapper>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default Screenshots;
