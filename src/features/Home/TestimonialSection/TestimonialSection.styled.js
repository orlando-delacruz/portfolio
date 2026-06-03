import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

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

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  width: 100%;
  animation: ${fadeInUp} 0.35s ease both;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const TestimonialCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-radius: 20px;
  background: ${theme.colors.secondary};
  will-change: transform, box-shadow;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
    border: 1px solid ${theme.colors.primary};
  }

  @media (prefers-reduced-motion: reduce) {
    will-change: auto;
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const QuoteIcon = styled.div`
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

export const Profile = styled.img`
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

export const Name = styled.h3`
  font-size: ${theme.typography.size.md};
  font-weight: ${theme.typography.weight.semibold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Position = styled.p`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Ratings = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  .star-icon {
    font-size: 0.875rem;
    color: ${theme.colors.primary};
  }
`;

export const Quote = styled.p`
  font-size: ${theme.typography.size.sm};
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

export const NavButton = styled.button`
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
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: scale(1.1);
    background-color: ${theme.colors.primaryLight};
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    transform: none;
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.primaryLight};
    outline-offset: 4px;
  }

  svg {
    font-size: 1rem;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;