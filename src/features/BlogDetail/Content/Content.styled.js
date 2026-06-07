import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Outer wrapper ───────────────────────────────────────── */
export const ContentWrapper = styled.div`
  background-color: ${theme.colors.background};
  padding: 80px 65px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media ${theme.media.tablet} {
    padding: 60px 20px;
    gap: 48px;
  }

  @media ${theme.media.mobile} {
    padding: 48px 20px;
    gap: 40px;
  }
`;

/* ─── Centered reading column ─────────────────────────────── */
export const ReadingColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

/* ═══════════════════════════════════════════════════════════ */
/* ARTICLE SECTIONS                                            */
/* ═══════════════════════════════════════════════════════════ */

export const ArticleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ $index }) => `${$index * 0.1}s`};
`;

export const SectionHeading = styled.h2`
  font-size: ${theme.typography.heading.h3};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.25;
  letter-spacing: -0.015em;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.2em;
    bottom: 0.2em;
    width: 3px;
    background: ${theme.colors.primary};
    border-radius: 50px;
  }
`;

export const SectionParagraph = styled.p`
  font-size: ${theme.typography.size.body};
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.7);
`;

/* ═══════════════════════════════════════════════════════════ */
/* KEY TAKEAWAYS                                               */
/* ═══════════════════════════════════════════════════════════ */

export const TakeawaysBox = styled.aside`
  border-radius: 1rem;
  padding: 2rem 2rem 2rem 2.25rem;
  background: rgba(${theme.colors.primaryRgb}, 0.07);
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.2);
  border-left: 4px solid ${theme.colors.primary};
  animation: ${fadeUp} 0.5s ease both;
`;

export const TakeawaysHeading = styled.h2`
  font-size: ${theme.typography.size.md};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.primary};
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

export const TakeawaysList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TakeawayItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: ${theme.typography.size.body};
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);

  svg {
    color: ${theme.colors.primary};
    font-size: 0.85rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;

/* ═══════════════════════════════════════════════════════════ */
/* AUTHOR BOX                                                  */
/* ═══════════════════════════════════════════════════════════ */

export const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  animation: ${fadeUp} 0.5s ease both;

  @media ${theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem;
    gap: 1rem;
  }
`;

export const AuthorAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    rgba(${theme.colors.primaryRgb}, 0.4)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`;

export const AuthorName = styled.p`
  font-size: ${theme.typography.size.body};
  font-weight: ${theme.typography.weight.semibold};
`;

export const AuthorRole = styled.p`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

export const AuthorDescription = styled.p`
  font-size: ${theme.typography.size.sm};
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.375rem;
`;

/* ═══════════════════════════════════════════════════════════ */
/* RELATED ARTICLES                                            */
/* ═══════════════════════════════════════════════════════════ */

export const RelatedSection = styled.section`
  width: 100%;
  animation: ${fadeUp} 0.5s ease both;
`;

export const RelatedHeading = styled.h2`
  font-size: ${theme.typography.heading.h3};
  font-weight: ${theme.typography.weight.semibold};
  margin-bottom: 1.5rem;
  letter-spacing: -0.015em;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const RelatedCard = styled.article`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0.875rem;
  overflow: hidden;
  transition: transform 0.22s ease, border-color 0.22s ease,
    box-shadow 0.22s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(${theme.colors.primaryRgb}, 0.22);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
    border-radius: 0.875rem;
  }
`;

export const RelatedThumb = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }

  ${RelatedCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const RelatedBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const RelatedCategory = styled.span`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const RelatedTitle = styled.h3`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.4;
`;

export const RelatedMeta = styled.span`
  font-size: ${theme.typography.size.xs};
  color: rgba(255, 255, 255, 0.38);
  margin-top: auto;
`;