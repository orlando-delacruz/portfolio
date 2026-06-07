import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ─────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.35; }
  50%       { opacity: 0.65; }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 140px 65px 100px;
  overflow: hidden;
  isolation: isolate;
  background-color: ${theme.colors.sectionBackground};

  @media ${theme.media.tablet} {
    padding: 120px 20px 80px;
  }

  @media ${theme.media.mobile} {
    padding: 110px 20px 70px;
  }
`;

/* ─── Background decoration ───────────────────────────────── */
export const BgGlow = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(500px, 80vw, 900px);
    height: clamp(400px, 60vh, 700px);
    background: radial-gradient(
      ellipse at 50% 30%,
      rgba(${theme.colors.primaryRgb}, 0.15) 0%,
      rgba(${theme.colors.primaryRgb}, 0.05) 45%,
      transparent 70%
    );
    animation: ${pulseGlow} 7s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.022) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent);
  }
`;

/* ─── Inner content container ─────────────────────────────── */
export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 780px;
  width: 100%;
`;

/* ─── Back link ───────────────────────────────────────────── */
export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  align-self: flex-start;
  transition: color 0.2s ease;
  margin-bottom: 0.25rem;

  svg { font-size: 0.85rem; }

  &:hover { color: ${theme.colors.white}; }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

/* ─── Category badge ──────────────────────────────────────── */
export const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  background: rgba(${theme.colors.primaryRgb}, 0.12);
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.25);
  padding: 0.3rem 0.875rem;
  border-radius: 50px;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: 0.05s;
`;

/* ─── Meta row ────────────────────────────────────────────── */
export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: ${theme.typography.size.xs};
  color: rgba(255, 255, 255, 0.45);
  opacity: 0;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: 0.15s;

  time { color: inherit; font-size: inherit; }

  .sep {
    font-size: 0.4rem;
    opacity: 0.4;
  }
`;

/* ─── Title ───────────────────────────────────────────────── */
export const Title = styled.h1`
  font-size: ${theme.typography.heading.h1};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.15;
  letter-spacing: -0.025em;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: 0.25s;

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.heading.h2};
  }
`;

/* ─── Divider ─────────────────────────────────────────────── */
export const TitleDivider = styled.div`
  width: 48px;
  height: 3px;
  border-radius: 50px;
  background: ${theme.colors.primary};
  opacity: 0;
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: 0.32s;
`;

/* ─── Intro paragraphs ────────────────────────────────────── */
export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 680px;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: 0.4s;
`;

export const IntroParagraph = styled.p`
  font-size: ${theme.typography.size.md};
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.body};
    text-align: left;
  }
`;

/* ─── Cover image ─────────────────────────────────────────── */
export const CoverImage = styled.figure`
  margin: 1.5rem 0 0;
  width: 100%;
  max-width: 860px;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.5s;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;