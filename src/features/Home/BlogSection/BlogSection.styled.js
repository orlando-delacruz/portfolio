// BlogSection.styled.js
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import theme from "../../../styles/theme";

const MotionLink = motion(Link);

const cardStyles = css`
  display: flex;
  border-radius: 20px;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.sectionBackground};
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 100%;
`;

export const ContentGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 35px;
  width: 100%;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
`;

export const MainBlogCard = styled(MotionLink)`
  ${cardStyles}
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  ${({ $featured }) =>
    $featured &&
    css`
      box-shadow:
        0 0 0 1px rgba(${theme.colors.primaryRgb}, 0.25),
        0 24px 48px -28px rgba(${theme.colors.primaryRgb}, 0.45);
    `}
`;

export const MainBlogThumbnailWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 490px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${theme.colors.secondary};
`;

export const MainBlogThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 490 / 250;
  display: block;
`;

export const FeaturedBadge = styled(motion.span)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.02em;
`;

export const MainBlogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;

  .card-head {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .date {
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.medium};
      color: ${theme.colors.gray};
      letter-spacing: 0.3px;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;

      .title {
        font-size: ${theme.typography.size.lg};
        font-weight: ${theme.typography.weight.semibold};
        color: ${theme.colors.white};
        margin: 0;
        line-height: 1.3;
      }

      .badge {
        padding: 4px 12px;
        background-color: ${theme.colors.secondary};
        border-radius: 5px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.typography.size.xs};
        font-weight: ${theme.typography.weight.semibold};
        color: ${theme.colors.white};
        white-space: nowrap;
      }
    }
  }

  .card-description {
    font-size: ${theme.typography.size.body};
    font-weight: ${theme.typography.weight.regular};
    color: ${theme.colors.gray};
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const SecondaryBlogCard = styled(MotionLink)`
  ${cardStyles}
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  align-items: stretch;

  @media ${theme.media.mobile} {
    flex-direction: column;
  }
`;

export const SecondaryBlogThumbnailWrap = styled.div`
  position: relative;
  width: 200px;
  min-width: 200px;
  aspect-ratio: 200 / 117;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${theme.colors.secondary};

  @media ${theme.media.mobile} {
    width: 100%;
    min-width: unset;
  }
`;

export const SecondaryBlogThumbnail = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const SecondaryBlogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  padding: 12px;

  .card-head {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .date {
      font-size: ${theme.typography.size.xs};
      font-weight: ${theme.typography.weight.semibold};
      color: ${theme.colors.gray};
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;

      .title {
        font-size: ${theme.typography.size.md};
        font-weight: ${theme.typography.weight.medium};
        color: ${theme.colors.white};
        margin: 0;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .badge {
        padding: 2px 10px;
        background-color: ${theme.colors.secondary};
        border-radius: 5px;
        font-size: ${theme.typography.size.xs};
        font-weight: ${theme.typography.weight.semibold};
        color: ${theme.colors.white};
        white-space: nowrap;
      }
    }
  }

  .card-description {
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.weight.regular};
    color: ${theme.colors.gray};
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const EmptyState = styled(motion.p)`
  text-align: center;
  color: ${theme.colors.gray};
  font-size: ${theme.typography.size.sm};
  padding: 40px 0;
  opacity: 0.6;
`;
