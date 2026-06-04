import styled from "styled-components";
import theme from "../../../styles/theme";

export const Section = styled.section`
  background-color: ${theme.colors.sectionBackground};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 6 / 7;
  border-radius: 4px;
  overflow: hidden;

  /* Accent border detail */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid rgba(${theme.colors.primaryRgb}, 0.25);
    border-radius: 4px;
    z-index: 1;
    pointer-events: none;
  }

  /* Bottom gradient overlay for subtle depth */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      to top,
      rgba(5, 14, 34, 0.6) 0%,
      transparent 100%
    );
    z-index: 1;
    pointer-events: none;
  }

  @media ${theme.media.tablet} {
    max-width: 480px;
    margin: 0 auto;
    aspect-ratio: 4 / 3;
  }

  @media ${theme.media.mobile} {
    aspect-ratio: 3 / 2;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.6s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.03);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${theme.media.tablet} {
    align-items: center;
    text-align: center;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${theme.media.tablet} {
    align-items: center;
  }
`;

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Paragraph = styled.p`
  font-size: ${theme.typography.size.body};
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.75;
  font-weight: ${theme.typography.weight.regular};
`;