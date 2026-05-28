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
  skills,
} = heroData;

const PrimaryIcon = primaryButton.icon;
const SecondaryIcon = secondaryButton.icon;

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
              <PrimaryIcon />
              {primaryButton.label}
            </S.PrimaryButton>

            <S.SecondaryButton
              to={secondaryButton.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryIcon />
              {secondaryButton.label}
            </S.SecondaryButton>
          </S.ActionButtons>

          <S.SocialLinkWrapper>
            {socialLinks.map(({ id, icon: Icon, link, label }) => (
              <S.SocialLink
                key={id}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              width={372}
              height={240}
              fetchPriority="high"
              loading="eager"
              decoding="async" />
          </S.HeroImageWrapper>

          {/* Each skill is mapped to its own floating card.
              Position and mobile position come from heroData.
              $index drives the alternating up/down float direction. */}
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <S.SkillCard
                key={skill.id}
                $top={skill.position.top}
                $left={skill.position.left}
                $mobileTop={skill.mobilePosition.top}
                $mobileLeft={skill.mobilePosition.left}
                $tabletTop={skill.tabletPosition.top}
                $tabletLeft={skill.tabletPosition.left}
                $color={skill.color}
                $index={index}
              >
                <Icon
                  style={{ color: skill.color, fontSize: "clamp(0.85rem, 2.5vw, 1.4rem)" }}
                  aria-hidden="true"
                />
                <span>{skill.label}</span>
              </S.SkillCard>
            );
          })}
        </S.RightContent>

      </S.HeroContainer>
    </S.HeroWrapper>
  );
};

export default HeroSection;