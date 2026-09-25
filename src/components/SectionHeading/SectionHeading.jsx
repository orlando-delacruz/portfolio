import * as S from "./SectionHeading.styled";
import { fadeUp, viewport } from "../../animations";

const SectionHeading = ({ pretitle, title, highlight, arialabel, id, align = "center" }) => {
  const headingId = id || arialabel;
  return (
    <S.Wrapper
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport(0.4)}
      $align={align}
    >
      <S.PreTitle>
        <div className="eyebrow" aria-hidden="true"></div>
        <span className="pre-title">{pretitle}</span>
        <div className="eyebrow" aria-hidden="true"></div>
      </S.PreTitle>

      <S.Title id={headingId}>
        {title} <span className="title-highlight">{highlight}</span>
      </S.Title>
    </S.Wrapper>
  );
};

export default SectionHeading;
