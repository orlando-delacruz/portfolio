import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ─────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const OverviewSection = styled.section`
  position: relative;
  background-color: ${theme.colors.sectionBackground};

  /* top border accent */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 65px;
    right: 65px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(${theme.colors.primaryRgb}, 0.4) 50%,
      rgba(255, 255, 255, 0.1) 70%,
      transparent
    );

    @media ${theme.media.tablet} {
      left: 20px;
      right: 20px;
    }
  }
`;

/* ─── Two-column grid ─────────────────────────────────────── */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

/* ─── Left column ─────────────────────────────────────────── */
export const Left = styled.div`
  position: sticky;
  top: 120px;

  @media ${theme.media.tablet} {
    position: static;
  }
`;

/* ─── Section label above heading ────────────────────────── */
export const Label = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.2em;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: 0.05s;

  &::before {
    content: "";
    display: block;
    height: 2px;
    width: 20px;
    background-color: ${theme.colors.primary};
    border-radius: 50px;
    flex-shrink: 0;
  }
`;

/* ─── Heading ─────────────────────────────────────────────── */
export const Heading = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.2;
  letter-spacing: -0.02em;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: 0.15s;
`;

export const Highlight = styled.span`
  color: ${theme.colors.primary};
`;

/* ─── Right column ────────────────────────────────────────── */
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* ─── Body paragraphs ─────────────────────────────────────── */
export const Body = styled.p`
  font-size: ${theme.typography.size.md};
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.65);
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: ${({ $delay }) => $delay ?? "0.25s"};

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.body};
  }
`;

/* ─── Decorative left-border accent on right col ─────────── */
export const AccentBar = styled.div`
  width: 3px;
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(
    to bottom,
    ${theme.colors.primary},
    rgba(${theme.colors.primaryRgb}, 0.1)
  );
  flex-shrink: 0;
  align-self: stretch;
`;

export const RightInner = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;