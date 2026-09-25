import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import * as S from "./HeroSection.styled";
import useCmsQuery from "../../../hooks/useCmsQuery";
import { fetchHomeHeroSection } from "../../../services/hygraph";
import { getIcon } from "../../../utils/iconMap";
import { QueryError, SectionSkeleton } from "../../../components/QueryState";
import {
  staggerContainer,
  fadeUp,
  heroImageIn,
  buttonHover,
  iconHover,
  defaultViewport,
} from "../../../animations";

// Floating-pill slots (positions stay in code; labels/colors/icons come from CMS)
const SKILL_SLOTS = [
  {
    position: { top: "5%", left: "25%" },
    tabletPosition: { top: "2%", left: "28%" },
    mobilePosition: { top: "2%", left: "22%" },
  },
  {
    position: { top: "40%", left: "5%" },
    tabletPosition: { top: "38%", left: "20%" },
    mobilePosition: { top: "38%", left: "10%" },
  },
  {
    position: { top: "25%", left: "65%" },
    tabletPosition: { top: "22%", left: "62%" },
    mobilePosition: { top: "22%", left: "62%" },
  },
];

const HeroSection = ({ id }) => {
  const { data: hero, loading, error, retry } = useCmsQuery(fetchHomeHeroSection);

  if (loading) {
    return (
      <S.HeroWrapper id={id}>
        <S.HeroContainer>
          <S.LeftContent>
            <SectionSkeleton label="Loading hero..." lines={4} />
          </S.LeftContent>
          <S.RightContent>
            <SectionSkeleton label="Loading hero image..." lines={1} />
          </S.RightContent>
        </S.HeroContainer>
      </S.HeroWrapper>
    );
  }

  if (error || !hero) {
    return (
      <S.HeroWrapper id={id}>
        <QueryError
          message={error || "Hero content is not published yet."}
          onRetry={retry}
        />
      </S.HeroWrapper>
    );
  }

  const {
    heroImage,
    label: role,
    title,
    highlightTitle,
    subtitle,
    primaryLabel,
    primaryLink,
    secondaryLabel,
    secondaryCv,
    socialLinks = [],
    skills = [],
  } = hero;

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
              href={primaryLink}
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <FaLaptopCode aria-hidden="true" />
              {primaryLabel}
            </S.PrimaryButton>

            <S.SecondaryButton
              href={secondaryCv?.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <MdOutlineFileDownload aria-hidden="true" />
              {secondaryLabel}
            </S.SecondaryButton>
          </S.ActionButtons>

          <S.SocialLinkWrapper variants={fadeUp}>
            {socialLinks.map(({ platform, url, label, iconKey }) => {
              const Icon = getIcon(iconKey);
              return (
                <S.SocialLink
                  key={platform || url}
                  href={url}
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
              );
            })}
          </S.SocialLinkWrapper>
        </S.LeftContent>

        {/* RIGHT SIDE */}
        <S.RightContent>
          <S.HeroImageWrapper variants={heroImageIn}>
            <img
              className="hero-image"
              src={heroImage?.url}
              alt={highlightTitle}
              width={heroImage?.width || 372}
              height={heroImage?.height || 240}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </S.HeroImageWrapper>

          {skills.slice(0, 3).map((skill, index) => {
            const Icon = getIcon(skill.iconKey);
            const slot = SKILL_SLOTS[index] || SKILL_SLOTS[0];
            return (
              <S.SkillCard
                key={skill.label}
                $top={slot.position.top}
                $left={slot.position.left}
                $mobileTop={slot.mobilePosition.top}
                $mobileLeft={slot.mobilePosition.left}
                $tabletTop={slot.tabletPosition.top}
                $tabletLeft={slot.tabletPosition.left}
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
