import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const shimIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const ListSection = styled.section`
  background-color: ${theme.colors.sectionBackground};
  padding-top: 0 !important;
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
  margin-bottom: 2rem;

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

/* ─── 3-column equal-height grid ─────────────────────────── */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  align-items: stretch;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

/* ─── Card ────────────────────────────────────────────────── */
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${theme.colors.secondary};
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  animation: ${shimIn} 0.45s ease both;
  animation-delay: ${({ $index }) => `${$index * 0.08}s`};

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(${theme.colors.primaryRgb}, 0.2);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(${theme.colors.primaryRgb}, 0.15);
  }

  &:focus-within {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 4px;
    border-radius: 1.25rem;
  }
`;

/* ─── Thumbnail ───────────────────────────────────────────── */
export const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.45s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

/* ─── Card body ───────────────────────────────────────────── */
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.875rem;
  padding: 1.5rem;

  @media ${theme.media.mobile} {
    padding: 1.25rem;
  }
`;

/* ─── Top row: category badge + read time ─────────────────── */
export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const CategoryBadge = styled.span`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  padding: 0.25rem 0.625rem;
  border-radius: 50px;
  background: rgba(${theme.colors.primaryRgb}, 0.12);
  color: ${theme.colors.primary};
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.22);
  white-space: nowrap;
`;

export const Duration = styled.span`
  font-size: ${theme.typography.size.xs};
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
`;

/* ─── Date ────────────────────────────────────────────────── */
export const DateText = styled.time`
  font-size: ${theme.typography.size.xs};
  color: rgba(255, 255, 255, 0.4);
`;

/* ─── Title ───────────────────────────────────────────────── */
export const CardTitle = styled.h3`
  font-size: ${theme.typography.heading.h4};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.25;
  letter-spacing: -0.01em;
`;

/* ─── Description — flex:1 pushes footer to bottom ───────── */
export const CardDescription = styled.p`
  font-size: ${theme.typography.size.sm};
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* ─── Divider ─────────────────────────────────────────────── */
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin: 0;
`;

/* ─── Read more link — always at bottom ───────────────────── */
export const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  color: ${theme.colors.primary};
  text-decoration: none;
  width: fit-content;
  transition: gap 0.2s ease, opacity 0.2s ease;

  svg {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    opacity: 0.8;
    svg { transform: translateX(3px); }
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;