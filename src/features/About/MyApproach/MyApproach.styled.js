import styled, { keyframes, css } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ──────────────────────────────────────────── */
const fadeSlideLeft = keyframes`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeSlideRight = keyframes`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(${theme.colors.primaryRgb}, 0); }
  50%       { box-shadow: 0 0 0 6px rgba(${theme.colors.primaryRgb}, 0.12); }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const Section = styled.section`
  background-color: ${theme.colors.background};
  position: relative;
  overflow: hidden;

  /* faint radial ambient behind the right column */
  &::after {
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    width: 520px;
    height: 520px;
    background: radial-gradient(
      circle,
      rgba(${theme.colors.primaryRgb}, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

/* ─── Two-column layout ───────────────────────────────────── */
export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 52px;
  }
`;

/* ─── LEFT column ─────────────────────────────────────────── */
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: ${fadeSlideLeft} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Paragraph = styled.p`
  font-size: ${theme.typography.size.body};
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.85;
  margin: 0;

  /* First paragraph slightly brighter */
  &:first-of-type {
    color: rgba(255, 255, 255, 0.75);
  }
`;

/* Decorative vertical rule separating text from the rest */
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(${theme.colors.primaryRgb}, 0.5) 0%,
    rgba(${theme.colors.primaryRgb}, 0.08) 60%,
    transparent 100%
  );
  margin: 0;
`;

/* ─── RIGHT column ────────────────────────────────────────── */
export const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  animation: ${fadeSlideRight} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.1s;

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

/* ─── Value card ──────────────────────────────────────────── */
export const Card = styled.div`
  ${({ $index }) => css`
    animation: ${fadeSlideUp} 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: ${0.15 + $index * 0.1}s;
  `}

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px 24px;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  /* top accent bar */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary},
      rgba(${theme.colors.primaryRgb}, 0)
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover,
  &:focus-within {
    border-color: rgba(${theme.colors.primaryRgb}, 0.35);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(${theme.colors.primaryRgb}, 0.12);

    &::before {
      transform: scaleX(1);
    }
  }
`;

/* ─── Icon circle ─────────────────────────────────────────── */
export const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(${theme.colors.primaryRgb}, 0.12);
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.2);
  flex-shrink: 0;
  transition: background 0.3s ease, border-color 0.3s ease;

  svg {
    color: ${theme.colors.primary};
    font-size: 18px;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  ${Card}:hover & {
    background: rgba(${theme.colors.primaryRgb}, 0.2);
    border-color: rgba(${theme.colors.primaryRgb}, 0.45);
    animation: ${pulseGlow} 1.4s ease-in-out infinite;

    svg {
      transform: scale(1.2) rotate(-8deg);
    }
  }
`;

/* ─── Card text ───────────────────────────────────────────── */
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CardTitle = styled.h3`
  font-size: ${theme.typography.size.md};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  line-height: 1.3;
  margin: 0;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${theme.colors.primary};
  }
`;

export const CardContent = styled.p`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
  margin: 0;
`;