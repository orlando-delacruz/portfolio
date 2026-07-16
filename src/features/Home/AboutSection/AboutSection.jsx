import * as S from "./AboutSection.styled";
import aboutData from "../../../data/pages/Home/aboutData";
import {
  staggerContainer,
  staggerContainerFrom,
  fadeLeft,
  fadeUp,
  hoverLift,
  buttonHover,
  defaultViewport,
} from "../../../animations"; // "floating" removed

const {
  aboutimage,
  pretitle,
  title,
  titleHighlight,
  body_1,
  body_2,
  actionButton,
} = aboutData;

const AboutSection = ({ id }) => {
  return (
    <S.AboutWrapper
      id={id}
      aria-labelledby="about-heading"
      variants={staggerContainer(undefined, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <S.LeftContent>
        <S.ImageWrapper
          variants={{ ...fadeLeft, hover: hoverLift.hover }}
          whileHover="hover"
        >
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

      <S.RightContent variants={staggerContainerFrom("right", undefined, 0.1)}>
        <S.Heading variants={fadeUp}>
          <p className="pre-title">{pretitle}</p>
          <h2 className="title" id="about-heading">
            {title} <span className="title-highlight">{titleHighlight}</span>
          </h2>
        </S.Heading>

        <S.Description variants={fadeUp}>
          <p className="body-1">{body_1}</p>
          <p className="body-2">{body_2}</p>
        </S.Description>

        <S.ActionButton
          to={actionButton.link}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          {actionButton.label}
        </S.ActionButton>
      </S.RightContent>
    </S.AboutWrapper>
  );
};

export default AboutSection;
