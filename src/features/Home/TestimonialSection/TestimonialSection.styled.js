// TestimonialSection.styled.js
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../styles/theme";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: ${theme.colors.primaryDark};
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
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  width: 100%;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const TestimonialCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-radius: 20px;
  background: ${theme.colors.secondary};
  border: 1px solid transparent;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
    border-color: ${theme.colors.primary};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const QuoteIcon = styled(motion.div)`
  padding: 10px;
  background-color: ${theme.colors.primaryDark};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  flex-shrink: 0;

  svg {
    color: ${theme.colors.primary};
    font-size: ${theme.typography.heading.h2};
  }
`;

export const Profile = styled(motion.img)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Name = styled(motion.h3)`
  font-size: ${theme.typography.size.md};
  font-weight: ${theme.typography.weight.semibold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Position = styled(motion.p)`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Ratings = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3px;

  .star-icon {
    font-size: 0.875rem;
    color: ${theme.colors.primary};
  }
`;

export const StarWrap = styled(motion.span)`
  display: inline-flex;
`;

export const Quote = styled(motion.p)`
  font-size: ${theme.typography.size.sm};
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: -webkit-line-clamp 0.2s ease;

  &.clamped {
    -webkit-line-clamp: 3;
  }
`;

export const SeeMoreButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-top: -4px;
  cursor: pointer;
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.primary};
  align-self: flex-start;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primaryLight};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

export const NavButton = styled(motion.button)`
  padding: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  flex-shrink: 0;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.primaryLight};
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primaryLight};
    outline-offset: 4px;
  }

  svg {
    font-size: 1rem;
    pointer-events: none;
  }
`;

export const EmptyState = styled(motion.p)`
  text-align: center;
  color: ${theme.colors.gray};
  font-size: ${theme.typography.size.sm};
  padding: 40px 0;
  opacity: 0.6;
`;
