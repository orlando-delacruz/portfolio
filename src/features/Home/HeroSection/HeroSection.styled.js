import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../styles/theme";

/* ================= HERO WRAPPER ================= */

export const HeroWrapper = styled.section`
  background-color: ${theme.colors.background};
  padding-top: 150px;
  display: flex;
  justify-content: center;

  @media ${theme.media.tablet} {
    padding-top: 120px;
  }
`;

/* ================= CONTAINER ================= */

export const HeroContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ================= LEFT SIDE ================= */

export const LeftContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  @media ${theme.media.tablet} {
    order: 2;
    align-items: center;
    text-align: center;
  }
`;

/* ================= HEADING ================= */

export const Heading = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media ${theme.media.tablet} {
    align-items: center;
  }
`;

/* ================= BADGE ================= */

export const Badge = styled(motion.span)`
  background-color: ${theme.colors.primary};
  padding: 5px 15px;
  border-radius: 50px;
  user-select: none;

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.xs};
  }
`;

/* ================= TITLE ================= */

export const Title = styled(motion.h1)`
  font-size: ${theme.typography.heading.h1};
  font-weight: ${theme.typography.weight.semibold};
  text-align: left;
  line-height: 1.2;
  text-wrap: balance;

  span {
    color: ${theme.colors.primary};
  }

  @media ${theme.media.tablet} {
    text-align: center;
  }
`;

/* ================= SUBTITLE ================= */

export const SubTitle = styled(motion.p)`
  text-align: left;
  max-width: 60ch;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.size.md};
  line-height: 1.65;

  @media ${theme.media.tablet} {
    text-align: center;
    max-width: 55ch;
  }
`;

/* ================= BUTTONS ================= */

export const ActionButtons = styled(motion.div)`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;

  @media ${theme.media.mobile} {
    gap: 14px;
    justify-content: center;
  }
`;

export const PrimaryButton = styled(motion.a)`
  padding: 15px 30px;
  min-height: 44px;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: 50px;
  font-size: ${theme.typography.size.lg};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    font-size: ${theme.typography.size.xl};
  }

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.sm};
    padding: 10px 15px;

    svg {
      font-size: ${theme.typography.size.md};
    }
  }
`;

export const SecondaryButton = styled(motion.a)`
  padding: 15px 30px;
  min-height: 44px;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.white};
  font-size: ${theme.typography.size.lg};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    font-size: ${theme.typography.size.xl};
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: ${theme.colors.white};
  }

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.sm};
    padding: 10px 15px;

    svg {
      font-size: ${theme.typography.size.md};
    }
  }
`;

/* ================= SOCIALS ================= */

export const SocialLinkWrapper = styled(motion.div)`
  display: flex;
  gap: 16px;
`;

export const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 50%;
  color: ${theme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.typography.size.xl};

  &:hover {
    background-color: rgba(${theme.colors.primaryRgb}, 0.1);
    color: ${theme.colors.white};
  }
`;

/* ================= RIGHT SIDE ================= */

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${theme.media.tablet} {
    order: 1;
  }
`;

/* ================= IMAGE ================= */

export const HeroImageWrapper = styled(motion.div)`
  width: 100%;
  max-width: 638px;
  aspect-ratio: 372 / 240;

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

/* ================= FLOAT ANIMATIONS (SkillCard only) ================= */

const floatUp = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const floatDown = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(10px); }
  100% { transform: translateY(0px); }
`;

/* ================= SKILL CARD ================= */

export const SkillCard = styled.div`
  position: absolute;

  top: ${({ $top }) => $top ?? "0"};
  left: ${({ $left }) => $left ?? "0"};

  padding: clamp(5px, 1.5vw, 10px) clamp(8px, 2vw, 14px);
  gap: clamp(4px, 1vw, 8px);
  font-size: clamp(0.6rem, 1.8vw, ${theme.typography.size.sm});

  border: 1px solid ${theme.colors.primary};
  border-radius: 10px;
  background-color: ${theme.colors.background};
  box-shadow: 0 4px 20px rgba(${theme.colors.primaryRgb}, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: ${theme.typography.weight.medium};
  white-space: nowrap;
  z-index: 10;

  animation: ${({ $index }) => ($index % 2 === 0 ? floatUp : floatDown)} 5s
    ease-in-out infinite;
  animation-delay: ${({ $index }) => ($index ?? 0) * 0.6}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media ${theme.media.tablet} {
    top: ${({ $tabletTop }) => $tabletTop ?? "0"};
    left: ${({ $tabletLeft }) => $tabletLeft ?? "0"};
  }

  @media ${theme.media.mobile} {
    top: ${({ $mobileTop }) => $mobileTop ?? "0"};
    left: ${({ $mobileLeft }) => $mobileLeft ?? "0"};
  }
`;
