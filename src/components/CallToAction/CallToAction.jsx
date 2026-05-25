import * as S from "./CallToAction.styled";
import ctaData from "../../data/cta";

const CallToAction = () => {

  const {
    title,
    description,
    primaryButton,
    secondaryButton,
    image,
  } = ctaData

  return (
    <S.CtaWrapper>
      <S.CtaContent>
        <S.CtaDetails>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.ActionButtons>
            <S.PrimaryButton href={primaryButton.href}>{primaryButton.label}</S.PrimaryButton>
            <S.SecondaryButton href={secondaryButton.href}>{secondaryButton.label}</S.SecondaryButton>
          </S.ActionButtons>
        </S.CtaDetails>

        <S.RightColumn>
          <S.CtaImage>
            <img src={image.img} alt={image.alt} />
          </S.CtaImage>
        </S.RightColumn>
      </S.CtaContent>
    </S.CtaWrapper>
  );
};

export default CallToAction;
