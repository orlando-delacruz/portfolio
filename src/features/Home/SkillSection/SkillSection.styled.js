import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../styles/theme";

export const SectionWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const SkillNavigation = styled(motion.nav)`
  display: flex;
  justify-content: center;
`;

export const TabList = styled.ul`
  display: flex;
  gap: 4px;
  background-color: ${theme.colors.secondary};
  padding: 4px;
  border-radius: 12px;
  list-style: none;
`;

export const TabButton = styled.button`
  position: relative;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  transition: color 0.2s ease;
  color: ${theme.colors.gray};
  cursor: pointer;
  overflow: hidden;

  .tab-label {
    position: relative;
    z-index: 1;
  }

  ${({ $active }) =>
    $active
      ? css`
          color: ${theme.colors.white};
        `
      : css`
          color: ${theme.colors.gray};

          &:hover {
            background-color: rgba(255, 255, 255, 0.07);
            color: ${theme.colors.white};
          }
        `}

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const ActiveIndicator = styled(motion.span)`
  position: absolute;
  inset: 0;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  z-index: 0;
`;

export const TabPanel = styled.div`
  width: 100%;
  min-height: 200px;

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const ContentGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 35px;
  width: 100%;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const SkillCard = styled(motion.article)`
  padding: 16px 10px;
  background-color: ${theme.colors.secondary};
  border-radius: 10px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(${theme.colors.primaryRgb}, 0.4);
    box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.45);
  }

  .icon-wrap {
    display: inline-flex;
  }

  img.icon {
    width: 3.125rem;
    height: 3.125rem;
    object-fit: contain;
  }

  .icon-placeholder {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    background: rgba(${theme.colors.primaryRgb}, 0.1);
    border: 2px dashed rgba(255, 255, 255, 0.1);
  }

  .skill-title {
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.weight.medium};
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${theme.colors.gray};
  }
`;

export const EmptyState = styled(motion.p)`
  text-align: center;
  color: ${theme.colors.gray};
  font-size: ${theme.typography.size.sm};
  padding: 40px 0;
  opacity: 0.6;
`;
