import styled, { keyframes, css } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ─────────────────────────────────────────── */
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const floatIcon = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Section wrapper ─────────────────────────────────────── */
export const Section = styled.section`
  background-color: ${theme.colors.sectionBackground};
  position: relative;
  overflow: hidden;

  /* subtle grid texture */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(37, 98, 234, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(37, 98, 234, 0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }
`;

/* ─── Inner container ─────────────────────────────────────── */
export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

/* ─── Cards grid ──────────────────────────────────────────── */
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  @media ${theme.media.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

/* ─── Individual card ─────────────────────────────────────── */
export const Card = styled.li`
  /* staggered entrance animation */
  ${({ $index }) => css`
    animation: ${fadeSlideUp} 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: ${$index * 120}ms;
  `}

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 28px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  cursor: default;
  overflow: hidden;

  /* accent glow strip on top */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(${theme.colors.primaryRgb}, 0.12) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover,
  &:focus-within {
    border-color: rgba(${theme.colors.primaryRgb}, 0.45);
    box-shadow: 0 8px 40px rgba(${theme.colors.primaryRgb}, 0.18),
      0 2px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px);

    &::before {
      opacity: 1;
    }
  }
`;

/* ─── Icon wrapper ────────────────────────────────────────── */
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    rgba(${theme.colors.primaryRgb}, 0.2) 0%,
    rgba(${theme.colors.primaryRgb}, 0.08) 100%
  );
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.25);
  flex-shrink: 0;
  transition: background 0.3s ease, border-color 0.3s ease;

  svg {
    color: ${theme.colors.primary};
    font-size: 22px;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & {
    background: linear-gradient(
      135deg,
      rgba(${theme.colors.primaryRgb}, 0.3) 0%,
      rgba(${theme.colors.primaryRgb}, 0.14) 100%
    );
    border-color: rgba(${theme.colors.primaryRgb}, 0.5);

    svg {
      animation: ${floatIcon} 1.8s ease-in-out infinite;
    }
  }
`;

/* ─── Card body ───────────────────────────────────────────── */
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* ─── Card title ──────────────────────────────────────────── */
export const CardTitle = styled.h3`
  font-size: ${theme.typography.heading.h4};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  line-height: 1.3;

  /* shimmer on hover */
  background: linear-gradient(
    90deg,
    ${theme.colors.white} 20%,
    rgba(${theme.colors.primaryRgb}, 0.9) 50%,
    ${theme.colors.white} 80%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  ${Card}:hover & {
    animation: ${shimmer} 1.6s linear infinite;
  }
`;

/* ─── Card content ────────────────────────────────────────── */
export const CardContent = styled.p`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
  margin: 0;
`;

/* ─── Decorative corner accent ────────────────────────────── */
export const CornerAccent = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(${theme.colors.primaryRgb}, 0.08) 50%
  );
  border-radius: 0 0 16px 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${Card}:hover & {
    opacity: 1;
  }
`;