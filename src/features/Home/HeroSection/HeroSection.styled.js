import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";

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
  align-items: center;
  justify-content: center;

  @media ${theme.media.tablet} {
    order: 2;
  }
`;

/* ================= HEADING ================= */

export const Heading = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  text-align: center;
  line-height: 1.2;

  span {
    background: linear-gradient(to right, ${theme.colors.primary}, #547fdf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

/* ================= SUBTITLE ================= */

export const SubTitle = styled(motion.p)`
  text-align: center;
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
  background-color: ${theme.colors.primary};
  border-radius: 50px;
  font-size: ${theme.typography.size.lg};
  cursor: pointer;
  display: flex;
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

export const SecondaryButton = styled(motion.create(Link))`
  padding: 15px 30px;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.white};
  font-size: ${theme.typography.size.lg};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    font-size: ${theme.typography.size.xl};
  }

  &:hover {
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
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
  padding: 10px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 50%;
  color: ${theme.colors.primary};
  display: flex;
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

  .hero-image {
    width: 100%;
    height: auto;
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

  animation: ${({ $index }) => ($index % 2 === 0 ? floatUp : floatDown)} 3s
    ease-in-out infinite;
  animation-delay: ${({ $index }) => ($index ?? 0) * 0.4}s;

  @media ${theme.media.tablet} {
    top: ${({ $tabletTop }) => $tabletTop ?? "0"};
    left: ${({ $tabletLeft }) => $tabletLeft ?? "0"};
  }

  @media ${theme.media.mobile} {
    top: ${({ $mobileTop }) => $mobileTop ?? "0"};
    left: ${({ $mobileLeft }) => $mobileLeft ?? "0"};
  }
`;
