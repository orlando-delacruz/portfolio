// src/features/Home/BlogSection/BlogSection.styled.js
import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

// Base card styles for consistency and reusability
const cardStyles = css`
  display: flex;
  border-radius: 20px;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.background || '#0F172A'};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
  padding: 40px 20px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
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
  grid-template-columns: 1fr 1.5fr;
  gap: 35px;
  width: 100%;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainBlogCard = styled.div`
  ${cardStyles}
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

export const MainBlogThumbnail = styled.img`
  width: 100%;
  max-width: 490px;
  height: auto;
  max-height: 250px;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 490 / 250;
  background-color: ${theme.colors.surface || '#1E293B'};
`;

export const MainBlogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  height: 100%;

  .card-head {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .date {
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.medium};
      color: ${theme.colors.textSecondary || '#94A3B8'};
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
        color: ${theme.colors.textPrimary || '#F8FAFC'};
        margin: 0;
        line-height: 1.3;
      }

      .badge {
        padding: 4px 12px;
        background-color: ${theme.colors.secondary || '#1E293B'};
        border-radius: 5px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.typography.size.xs};
        font-weight: ${theme.typography.weight.semibold};
        color: ${theme.colors.textPrimary || '#F8FAFC'};
        white-space: nowrap;
      }
    }
  }

  .card-description {
    font-size: ${theme.typography.size.body};
    font-weight: ${theme.typography.weight.regular};
    color: ${theme.colors.textSecondary || '#94A3B8'};
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

export const SecondaryBlogCard = styled.div`
  ${cardStyles}
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SecondaryBlogThumbnail = styled.img`
  width: 200px;
  min-width: 200px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 200 / 117;
  background-color: ${theme.colors.surface || '#1E293B'};

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
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
      font-size: 12px;
      font-weight: ${theme.typography.weight.semibold};
      color: ${theme.colors.textSecondary || '#94A3B8'};
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;

      .title {
        font-size: 18px;
        font-weight: ${theme.typography.weight.medium};
        color: ${theme.colors.textPrimary || '#F8FAFC'};
        margin: 0;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .badge {
        padding: 2px 10px;
        background-color: ${theme.colors.secondary || '#1E293B'};
        border-radius: 5px;
        font-size: 12px;
        font-weight: ${theme.typography.weight.semibold};
        color: ${theme.colors.textPrimary || '#F8FAFC'};
        white-space: nowrap;
      }
    }
  }

  .card-description {
    font-size: 14px;
    font-weight: ${theme.typography.weight.regular};
    color: ${theme.colors.textSecondary || '#94A3B8'};
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ViewAllButton = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid ${theme.colors.primary};
  background-color: transparent;
  color: ${theme.colors.primary};
  font-size: 16px;
  font-weight: ${theme.typography.weight.regular};
  line-height: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: ${theme.colors.primary}20;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
    background-color: ${theme.colors.primary}10;
  }
`;