import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

/* ─── Animations ─────────────────────────────────────────── */
const shimIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const GridSection = styled.section`
  background-color: ${theme.colors.sectionBackground};
  padding-top: 0 !important;
`;

/* ─── Results count ───────────────────────────────────────── */
export const ResultCount = styled.p`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1.25rem;
`;

/* ─── Empty state ─────────────────────────────────────────── */
export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 5rem 0;
  color: rgba(255, 255, 255, 0.35);
  text-align: center;

  svg {
    font-size: 2.5rem;
    opacity: 0.3;
  }

  p {
    font-size: ${theme.typography.size.body};
  }
`;

/* ─── Equal-height 2-column grid ─────────────────────────── */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.188rem;
  align-items: stretch;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

/* ─── Card ────────────────────────────────────────────────── */
export const CardWrapper = styled.article`
  border-radius: 1.25rem;
  overflow: hidden;
  background-color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: ${shimIn} 0.45s ease both;
  animation-delay: ${({ $index }) => `${$index * 0.09}s`};

  &:focus-within {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 4px;
    border-radius: 1.25rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(${theme.colors.primaryRgb}, 0.18);
  }
`;

/* ─── Thumbnail — fixed ratio, no layout shift ────────────── */
export const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.45s ease;
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.05);
  }
`;

/* ─── Card content — fills remaining height ───────────────── */
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 1.75rem 1.5rem;

  @media ${theme.media.mobile} {
    padding: 1.25rem;
  }
`;

/* ─── Head ────────────────────────────────────────────────── */
export const CardHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  .card-title {
    font-size: ${theme.typography.heading.h3};
    font-weight: ${theme.typography.weight.semibold};
    line-height: 1.2;
  }

  .meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4rem;
    font-size: ${theme.typography.size.xs};
    color: rgba(255, 255, 255, 0.5);
    margin: 0;

    .sep {
      opacity: 0.35;
      font-size: 0.45rem;
    }

    .category {
      color: ${theme.colors.primary};
      font-weight: ${theme.typography.weight.medium};
    }
  }
`;

/* ─── Description — clamp to 3 lines, grows to push footer ── */
export const CardBody = styled.p`
  font-size: ${theme.typography.size.body};
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
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

/* ─── Footer — always pinned to bottom via flex ──────────── */
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-top: auto;

  .live-demo {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    color: ${theme.colors.primary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.weight.medium};
    transition: opacity 0.2s ease;

    svg { font-size: 0.7rem; }
    &:hover { opacity: 0.75; text-decoration: underline; }

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 3px;
      border-radius: 3px;
    }
  }

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    .btn {
      padding: 0.5rem 0.875rem;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 50px;
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      font-size: ${theme.typography.size.xs};
      font-weight: ${theme.typography.weight.medium};
      font-family: inherit;
      color: rgba(255, 255, 255, 0.65);
      background: transparent;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.28);
        color: ${theme.colors.white};
      }

      &:focus-visible {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: 3px;
      }

      &.primary {
        border-color: ${theme.colors.primary};
        color: ${theme.colors.primary};

        &:hover {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      }
    }
  }
`;