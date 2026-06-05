import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ─────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Page wrapper ────────────────────────────────────────── */
export const DetailPage = styled.main`
  min-height: 100svh;
  background-color: ${theme.colors.background};
`;

/* ── ─ Hero banner ────────────────────────────────────────── */
export const HeroBanner = styled.section`
  position: relative;
  padding: 140px 65px 80px;
  background-color: ${theme.colors.sectionBackground};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
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
  }

  @media ${theme.media.tablet} {
    padding: 120px 20px 60px;
    &::after { left: 20px; right: 20px; }
  }

  @media ${theme.media.mobile} {
    padding: 110px 20px 50px;
  }
`;

/* Decorative glow */
export const BgGlow = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(400px, 70vw, 800px);
    height: clamp(300px, 50vh, 600px);
    background: radial-gradient(
      ellipse at 50% 30%,
      rgba(${theme.colors.primaryRgb}, 0.14) 0%,
      transparent 65%
    );
  }
`;

export const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 820px;
`;

export const BackLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 0.5rem;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover { color: ${theme.colors.white}; }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
    border-radius: 4px;
  }

  svg { font-size: 0.85rem; }
`;

export const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  background: rgba(${theme.colors.primaryRgb}, 0.1);
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.25);
  padding: 0.3rem 0.75rem;
  border-radius: 50px;
  width: fit-content;
  animation: ${fadeUp} 0.5s ease both;
`;

export const HeroTitle = styled.h1`
  font-size: ${theme.typography.heading.h1};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.15;
  letter-spacing: -0.02em;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: 0.1s;
`;

export const HeroDescription = styled.p`
  font-size: ${theme.typography.size.md};
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.65);
  max-width: 680px;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: 0.2s;

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.body};
  }
`;

/* ─── Meta pills row ──────────────────────────────────────── */
export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: 0.28s;
`;

export const MetaPill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: ${theme.typography.size.sm};

  .label {
    color: rgba(255, 255, 255, 0.4);
    font-size: ${theme.typography.size.xs};
  }

  .value {
    color: ${theme.colors.white};
    font-weight: ${theme.typography.weight.medium};
  }

  svg {
    color: ${theme.colors.primary};
    font-size: 0.875rem;
    flex-shrink: 0;
  }
`;

/* ─── CTA button row in hero ──────────────────────────────── */
export const HeroCTA = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: 0.36s;

  a, button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.25rem;
    border-radius: 50px;
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.weight.medium};
    font-family: inherit;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 3px;
    }
  }

  .btn-primary {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};

    &:hover {
      background: transparent;
      color: ${theme.colors.primary};
    }
  }

  .btn-ghost {
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.15);

    &:hover {
      border-color: rgba(255, 255, 255, 0.35);
      color: ${theme.colors.white};
      background: rgba(255, 255, 255, 0.06);
    }
  }
`;

/* ─── Body content layout ─────────────────────────────────── */
export const Body = styled.div`
  padding: 80px 65px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media ${theme.media.tablet} {
    padding: 60px 20px;
    gap: 60px;
  }

  @media ${theme.media.mobile} {
    padding: 48px 20px;
    gap: 48px;
  }
`;

/* ─── Full-width project screenshot ───────────────────────── */
export const ScreenshotWrapper = styled.figure`
  margin: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

/* ─── Two-column detail layout ────────────────────────────── */
export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

/* ─── Section label ───────────────────────────────────────── */
export const SectionLabel = styled.p`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;

  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 2px;
    background: ${theme.colors.primary};
    border-radius: 50px;
    flex-shrink: 0;
  }
`;

/* ─── Section heading ─────────────────────────────────────── */
export const SectionHeading = styled.h2`
  font-size: ${theme.typography.heading.h3};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.25;
  letter-spacing: -0.015em;
  margin-bottom: 1.25rem;
`;

/* ─── Body text ───────────────────────────────────────────── */
export const BodyText = styled.p`
  font-size: ${theme.typography.size.body};
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.65);
`;

/* ─── Highlights list ─────────────────────────────────────── */
export const HighlightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  list-style: none;
`;

export const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: ${theme.typography.size.body};
  color: rgba(255, 255, 255, 0.8);

  svg {
    color: ${theme.colors.primary};
    font-size: 0.9rem;
    flex-shrink: 0;
  }
`;

/* ─── Tech stack grid ─────────────────────────────────────── */
export const TechGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const TechRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(${theme.colors.primaryRgb}, 0.06);
    border-color: rgba(${theme.colors.primaryRgb}, 0.18);
  }

  .tech-name {
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.weight.semibold};
    font-family: ui-monospace, "Fira Code", monospace;
    color: ${theme.colors.primary};
    min-width: 140px;
    flex-shrink: 0;
  }

  .tech-purpose {
    font-size: ${theme.typography.size.sm};
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.5;
  }
`;

/* ─── Challenges ──────────────────────────────────────────── */
export const ChallengeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ChallengeCard = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid ${theme.colors.primary};
  border-radius: 0 12px 12px 0;

  h3 {
    font-size: ${theme.typography.size.body};
    font-weight: ${theme.typography.weight.semibold};
    margin-bottom: 0.625rem;
  }

  p {
    font-size: ${theme.typography.size.sm};
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.6);
  }
`;

/* ─── Not found state ─────────────────────────────────────── */
export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 1rem;
  text-align: center;
  padding: 2rem;

  h2 {
    font-size: ${theme.typography.heading.h2};
    font-weight: ${theme.typography.weight.semibold};
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: ${theme.typography.size.body};
  }
`;