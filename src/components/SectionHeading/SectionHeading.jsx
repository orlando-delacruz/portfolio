import * as S from "./SectionHeading.styled";

const SectionHeading = ({ pretitle, title, highlight, arialabel }) => {
  return (
    <S.Wrapper>
      <S.PreTitle>
        <div className="eyebrow"></div>
        <span className="pre-title">{pretitle}</span>
        <div className="eyebrow"></div>
      </S.PreTitle>

      <S.Title aria-label={arialabel}>
        {title} <span className="title-highlight">{highlight}</span>
      </S.Title>
    </S.Wrapper>
  );
};

export default SectionHeading;
