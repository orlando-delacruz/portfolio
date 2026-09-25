import * as S from "./AboutSection.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchHomeAbout } from "../../../services/hygraph";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import {
  staggerContainer,
  staggerContainerFrom,
  fadeLeft,
  fadeUp,
  hoverLift,
  buttonHover,
  defaultViewport,
} from "../../../animations"; // "floating" removed

const AboutSection = ({ id }) => {
  const { data: about, loading, error, retry , ref } = useCmsQuery(fetchHomeAbout, { defer: true });

  if (loading) {
    return (
      <S.AboutWrapper ref={ref} id={id}>
        <SectionSkeleton label="Loading about..." lines={4} />
      </S.AboutWrapper>
    );
  }

  if (error || !about) {
    return (
      <S.AboutWrapper ref={ref} id={id}>
        <QueryError
          message={error || "About content is not published yet."}
          onRetry={retry}
        />
      </S.AboutWrapper>
    );
  }

  const {
    image,
    imageAlt,
    pretitle,
    title,
    titleHighlight,
    body1,
    body2,
    ctaLabel,
    ctaLink,
  } = about;

  return (
    <S.AboutWrapper ref={ref}
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
            src={image?.url}
            alt={imageAlt || "About me"}
            loading="lazy"
            decoding="async"
            width={image?.width || 638}
            height={image?.height || 430}
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
          <p className="body-1">{body1}</p>
          <p className="body-2">{body2}</p>
        </S.Description>

        <S.ActionButton
          to={ctaLink}
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          {ctaLabel}
        </S.ActionButton>
      </S.RightContent>
    </S.AboutWrapper>
  );
};

export default AboutSection;
