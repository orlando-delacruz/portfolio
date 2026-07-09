import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./CallToAction.styled";
import ctaData from "../../data/cta";

const CallToAction = () => {
  const { title, description, primaryButton, secondaryButton, image } = ctaData;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = image.img;
    link.fetchPriority = "high";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [image.img]);

  return (
    <S.CtaWrapper id="call-to-action" aria-labelledby="cta-title">
      <S.CtaContent>
        <S.CtaDetails>
          <S.Title id="cta-title">{title}</S.Title>
          <S.Description>{description}</S.Description>

          <S.ActionButtons>
            <S.PrimaryButton
              as={Link}
              to="/contact"
              aria-label="Go to contact page"
            >
              {primaryButton.label}
            </S.PrimaryButton>

            <S.SecondaryButton
              href={secondaryButton.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {secondaryButton.label}
            </S.SecondaryButton>
          </S.ActionButtons>
        </S.CtaDetails>

        <S.RightColumn>
          <S.CtaImage>
            <img
              src={image.img}
              alt={image.alt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={456}
              height={392}
            />
          </S.CtaImage>
        </S.RightColumn>
      </S.CtaContent>
    </S.CtaWrapper>
  );
};

export default CallToAction;
