import * as S from "./HeroSection.styled";
import heroData from "../../../data/pages/Home/heroData";

const {
  heroImage,
  role,
  title,
  highlightTitle,
  subtitle,
  primaryButton,
  secondaryButton,
  socialLinks,
} = heroData;

const HeroSection = () => {
  return (
    <S.HeroWrapper id="home">
      <S.HeroContainer>
        {/* LEFT SIDE */}
        <S.LeftContent>
          <S.Heading>
            <S.Badge>{role}</S.Badge>

            <S.Title>
              {title} <span>{highlightTitle}</span>
            </S.Title>

            <S.SubTitle>{subtitle}</S.SubTitle>
          </S.Heading>

          <S.ActionButtons>
            <S.PrimaryButton to={primaryButton.link}>
              {primaryButton.label}
            </S.PrimaryButton>

            <S.SecondaryButton
              to={secondaryButton.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </S.SecondaryButton>
          </S.ActionButtons>

          <S.SocialLinkWrapper>
            {socialLinks.map(({ id, icon: Icon, link, label }) => (
              <S.SocialLink key={id} href={link} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
              </S.SocialLink>
            ))}
          </S.SocialLinkWrapper>
        </S.LeftContent>

        {/* RIGHT SIDE */}
        <S.RightContent>
          <S.HeroImageWrapper>
            <img
              className="hero-image"
              src={heroImage}
              alt={highlightTitle}
            />
          </S.HeroImageWrapper>
        </S.RightContent>
      </S.HeroContainer>
    </S.HeroWrapper>
  );
};

export default HeroSection;