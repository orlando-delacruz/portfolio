import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const Section = styled.section`
  background-color: ${theme.colors.background};
`;

export const Header = styled.div`
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`;

export const Heading = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  letter-spacing: -0.02em;
`;

export const HeadingAccent = styled.div`
  height: 2px;
  flex: 1;
  max-width: 80px;
  background: linear-gradient(
    90deg,
    ${theme.colors.primary},
    transparent
  );
  border-radius: 50px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  overflow: hidden;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  position: relative;
  background-color: ${theme.colors.sectionBackground};
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  transition: background-color 0.3s ease;

  /* Top accent line */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(${theme.colors.primaryRgb}, 0.6),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Shimmer sweep on hover */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 40%,
      rgba(${theme.colors.primaryRgb}, 0.04) 50%,
      transparent 60%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background-color: rgba(${theme.colors.primaryRgb}, 0.04);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
      animation: ${shimmer} 0.8s ease forwards;
    }
  }

  @media ${theme.media.tablet} {
    padding: 28px 24px;
  }
`;

export const CardNumber = styled.span`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.medium};
  color: rgba(${theme.colors.primaryRgb}, 0.5);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
`;

export const CardLabel = styled.p`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const CardValue = styled.p`
  font-size: ${theme.typography.size.md};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  line-height: 1.3;
`;