import * as S from "./AboutSection.styled"
import aboutData from "../../../data/pages/Home/aboutData";

const { aboutimage, pretitle, title, titleHighlight, body_1, body_2, actionButton } = aboutData

const AboutSection = () => {
  return (
    <>
      <S.AboutWrapper id="about" aria-labelledby="about-heading">
        <S.LeftContent>
          <S.ImageWrapper>
            <img
              className="about-image"
              src={aboutimage}
              alt="Orlando showing UI holograms"
              loading="lazy"
              decoding="async"
              width={638}
              height={430}
            />
          </S.ImageWrapper>
        </S.LeftContent>

        <S.RightContent>
          <S.Heading>
            <p className="pre-title">{pretitle}</p>
            <h2 className="title" id="about-heading">{title} <span className="title-highlight">{titleHighlight}</span></h2>
          </S.Heading>

          <S.Description>
            <p className="body-1">{body_1}</p>
            <p className="body-2">{body_2}</p>
          </S.Description>

          <S.ActionButton to={actionButton.link}>{actionButton.label}</S.ActionButton>
        </S.RightContent>
      </S.AboutWrapper>
    </>
  );
};

export default AboutSection;
