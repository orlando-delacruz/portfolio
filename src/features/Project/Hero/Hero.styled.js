import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ─────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.7; }
`;

/* ─── Section wrapper ─────────────────────────────────────── */
export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  isolation: isolate;
  margin-top: 95px;

  @media ${theme.media.tablet} {
    padding: 120px 20px 80px;
    margin-top: 68px;

  }

  @media ${theme.media.mobile} {
    padding: 110px 20px 70px;
    margin-top: 65px;
  }
`;

/* ─── Background decoration ──────────────────────────────── */
export const BgGlow = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  /* radial gradient blob — top-center */
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
      rgba(${theme.colors.primaryRgb}, 0.18) 0%,
      rgba(${theme.colors.primaryRgb}, 0.06) 45%,
      transparent 70%
    );
    animation: ${pulseGlow} 6s ease-in-out infinite;
  }

  /* subtle noise/grid pattern */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.025) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent);
  }
`;

/* ─── Inner container ─────────────────────────────────────── */
export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  max-width: 820px;
  width: 100%;
`;

/* ─── Pre-title / label ───────────────────────────────────── */
export const PreTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.2em;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.1s;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 20px;
    background-color: ${theme.colors.primary};
    border-radius: 50px;
  }
`;

/* ─── Main heading ────────────────────────────────────────── */
export const Heading = styled.h1`
  font-size: ${theme.typography.heading.h1};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.15;
  letter-spacing: -0.02em;
  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.22s;
`;

export const Highlight = styled.span`
  background: linear-gradient(
    120deg,
    ${theme.colors.primary} 0%,
    #60a5fa 50%,
    ${theme.colors.primary} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 4s linear infinite;
`;

/* ─── Description ─────────────────────────────────────────── */
export const Description = styled.p`
  font-size: ${theme.typography.size.md};
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.65);
  max-width: 640px;
  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.34s;

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.body};
  }
`;

/* ─── Stats row ───────────────────────────────────────────── */
export const StatsRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  margin-top: 8px;
  opacity: 0;
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.46s;
  backdrop-filter: blur(12px);

  @media ${theme.media.mobile} {
    flex-direction: column;
    background: transparent;
    border: none;
    gap: 12px;
    width: 100%;
  }
`;

/* ─── Single stat card ────────────────────────────────────── */
export const StatCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 28px 48px;
  background: rgba(255, 255, 255, 0.03);
  transition: background 0.2s ease;
  position: relative;

  /* divider between siblings (except last) */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255, 255, 255, 0.1);

    @media ${theme.media.mobile} {
      display: none;
    }
  }

  &:hover {
    background: rgba(${theme.colors.primaryRgb}, 0.08);
  }

  @media ${theme.media.tablet} {
    padding: 24px 32px;
  }

  @media ${theme.media.mobile} {
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
    padding: 16px 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    width: 100%;
    text-align: left;
  }
`;

export const StatValue = styled.span`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.primary};
  line-height: 1;
  letter-spacing: -0.02em;
`;

export const StatLabel = styled.span`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
  line-height: 1.4;
`;