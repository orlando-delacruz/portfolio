import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const FeaturedSection = styled.section`
  background-color: ${theme.colors.sectionBackground};
  position: relative;

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

/* ─── Section label ───────────────────────────────────────── */
export const SectionLabel = styled.p`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
  animation: ${fadeUp} 0.5s ease both;

  &::before {
    content: "";
    display: block;
    width: 18px;
    height: 2px;
    background: ${theme.colors.primary};
    border-radius: 50px;
    flex-shrink: 0;
  }
`;

/* ─── Horizontal card ─────────────────────────────────────── */
export const Card = styled.article`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  border-radius: 1.25rem;
  overflow: hidden;
  background-color: ${theme.colors.secondary};
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  animation: ${fadeUp} 0.55s ease both;
  animation-delay: 0.1s;

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(${theme.colors.primaryRgb}, 0.2);
    border-color: rgba(${theme.colors.primaryRgb}, 0.2);
  }

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

/* ─── Thumbnail side ──────────────────────────────────────── */
export const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 320px;

  @media ${theme.media.tablet} {
    min-height: 240px;
  }

  @media ${theme.media.mobile} {
    min-height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.04);
  }

  /* gradient overlay fading into card bg */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      transparent 60%,
      ${theme.colors.secondary} 100%
    );
    pointer-events: none;

    @media ${theme.media.tablet} {
      background: linear-gradient(
        to bottom,
        transparent 60%,
        ${theme.colors.secondary} 100%
      );
    }
  }
`;

/* ─── Content side ────────────────────────────────────────── */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  padding: 2.5rem 2.5rem 2.5rem 2rem;

  @media ${theme.media.tablet} {
    padding: 2rem;
  }

  @media ${theme.media.mobile} {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

/* ─── Badge ───────────────────────────────────────────────── */
export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  width: fit-content;
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  background: rgba(${theme.colors.primaryRgb}, 0.12);
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.25);
  padding: 0.3rem 0.75rem;
  border-radius: 50px;

  /* pulsing dot */
  &::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    flex-shrink: 0;
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1);   }
      50%       { opacity: 0.4; transform: scale(0.7); }
    }
  }
`;

/* ─── Meta row: date + read time ─────────────────────────── */
export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: ${theme.typography.size.xs};
  color: rgba(255, 255, 255, 0.45);

  .sep {
    font-size: 0.4rem;
    opacity: 0.4;
  }

  time {
    font-size: inherit;
    color: inherit;
  }

  .duration {
    font-size: inherit;
    color: inherit;
  }
`;

/* ─── Title ───────────────────────────────────────────────── */
export const Title = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.heading.h3};
  }
`;

/* ─── Description ─────────────────────────────────────────── */
export const Description = styled.p`
  font-size: ${theme.typography.size.body};
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.62);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ─── CTA button ──────────────────────────────────────────── */
export const ReadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.7rem 1.375rem;
  border-radius: 50px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  font-family: inherit;
  text-decoration: none;
  border: 1px solid ${theme.colors.primary};
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;

  svg {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: transparent;
    color: ${theme.colors.primary};

    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
    border-radius: 50px;
  }
`;