import * as S from "./SectionHeading.styled";
import { fadeUp, viewport } from "../../animations";

const SectionHeading = ({ pretitle, title, highlight, arialabel }) => {
  return (
    <S.Wrapper
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport(0.4)}
    >
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
