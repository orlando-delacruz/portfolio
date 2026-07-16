import * as S from "./HeroSection.styled";
import heroData from "../../../data/pages/Home/heroData";
import {
  staggerContainer,
  fadeUp,
  heroImageIn,
  buttonHover,
  iconHover,
  defaultViewport,
} from "../../../animations";

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

const HeroSection = ({ id }) => {
  return (
    <S.HeroWrapper id={id}>
      <S.HeroContainer
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {/* LEFT SIDE */}
        <S.LeftContent variants={staggerContainer()}>
          <S.Heading variants={staggerContainer(undefined, 0)}>
            <S.Badge variants={fadeUp}>{role}</S.Badge>

            <S.Title variants={fadeUp}>
              {title} <span>{highlightTitle}</span>
            </S.Title>

            <S.SubTitle variants={fadeUp}>{subtitle}</S.SubTitle>
          </S.Heading>

          <S.ActionButtons variants={fadeUp}>
            <S.PrimaryButton
              href={primaryButton.link}
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <PrimaryIcon />
              {primaryButton.label}
            </S.PrimaryButton>

            <S.SecondaryButton
              to={secondaryButton.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <SecondaryIcon />
              {secondaryButton.label}
            </S.SecondaryButton>
          </S.ActionButtons>

          <S.SocialLinkWrapper variants={fadeUp}>
            {socialLinks.map(({ id, icon: Icon, link, label }) => (
              <S.SocialLink
                key={id}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Icon aria-hidden="true" />
              </S.SocialLink>
            ))}
          </S.SocialLinkWrapper>
        </S.LeftContent>

        {/* RIGHT SIDE */}
        <S.RightContent>
          <S.HeroImageWrapper variants={heroImageIn}>
            <img
              className="hero-image"
              src={heroImage}
              alt={highlightTitle}
              width={372}
              height={240}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </S.HeroImageWrapper>

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
                  style={{
                    color: skill.color,
                    fontSize: "clamp(0.85rem, 2.5vw, 1.4rem)",
                  }}
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
