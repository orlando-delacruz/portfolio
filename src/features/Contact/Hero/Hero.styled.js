import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/theme';

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

/* ─── Section ─────────────────────────────────────────────── */
export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100svh;
  padding: 140px 65px 100px;
  overflow: hidden;
  isolation: isolate;

  @media ${theme.media.tablet} {
    padding: 120px 20px 80px;
  }

  @media ${theme.media.mobile} {
    padding: 110px 20px 70px;
  }
`;

/* ─── Background decoration ──────────────────────────────── */
export const BgGlow = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  &::before {
    content: '';
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

  &::after {
    content: '';
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
    content: '';
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