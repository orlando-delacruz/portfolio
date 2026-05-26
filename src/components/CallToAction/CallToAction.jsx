import * as S from "./CallToAction.styled";
import ctaData from "../../data/cta";
import Vector from "../../assets/cta-vector.png";

const CallToAction = () => {
  const { title, description, primaryButton, secondaryButton, image } = ctaData;

  return (
    <S.CtaWrapper aria-labelledby="cta-section">
      <S.CtaContent>
        <S.CtaDetails>
          <S.Title id="cta-title">{title}</S.Title>
          <S.Description>{description}</S.Description>

          <S.ActionButtons>
            <S.PrimaryButton
              href={primaryButton.href}
              aria-label={`${primaryButton.label} — get in touch`}
            >
              {primaryButton.label}
            </S.PrimaryButton>

            <S.SecondaryButton
              href={secondaryButton.href}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`${secondaryButton.label} — opens PDF`}
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
          <S.Vector
            src={Vector}
            alt="vector shapes"
            loading="lazy"
            aria-hidden="true"
            width={456}
            height={327} />

        </S.RightColumn>
      </S.CtaContent>
    </S.CtaWrapper>
  );
};

export default CallToAction;