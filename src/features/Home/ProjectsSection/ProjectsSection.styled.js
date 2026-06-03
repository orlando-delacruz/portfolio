import styled from "styled-components";
import theme from "../../../styles/theme";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
  background-color: ${theme.colors.sectionBackground};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.188rem;
  row-gap: 2.188rem;
  width: 100%;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  &:focus-within {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 4px;
    border-radius: 1.25rem;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1.25rem 1.25rem 0 0;
    display: block;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 2.188rem 1.25rem;
  background-color: ${theme.colors.secondary};
  border-radius: 0 0 1.25rem 1.25rem;

  @media ${theme.media.mobile} {
    padding: 1.25rem;
  }
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start; 
    gap: 0.5rem; 
  }

  .card-title {
    font-size: ${theme.typography.heading.h3};
    font-weight: ${theme.typography.weight.semibold};
  }

  .meta {
    display: flex;
    align-items: center;
    font-size: ${theme.typography.size.xs};
    font-weight: ${theme.typography.weight.medium};
    color: ${theme.colors.gray};
    gap: 0.625rem;
    margin: 0;

    .meta-item {
      display: contents;

      .sr-only {
        display: none ;
      }
    }

    .category,
    .progress {
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
      margin: 0;
    }
  }
`;

export const CardBody = styled.p`
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${theme.media.tablet} {
    text-align: start;
    -webkit-line-clamp: 3;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${theme.media.tablet} {
    flex-direction: column;
    gap: 0.875rem;
    align-items: flex-start;
  }

  .live-demo {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: ${theme.colors.primary};
    transition: color 0.2s ease, text-decoration 0.2s ease;

    svg {
      font-size: ${theme.typography.size.lg};
    }

    &:hover {
      text-decoration: underline;
    }


    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 3px;
      border-radius: 3px;
    }
  }

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-wrap: wrap;

    .github-link,
    .view-link {
      padding: 0.625rem 0.938rem;
      border: 1px solid ${theme.colors.primary};
      border-radius: 3.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.primary};
      gap: 0.625rem;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.medium};
      background-color: transparent;
      transition: background-color 0.2s ease, color 0.2s ease;

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      &:focus-visible {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: 3px;
      }
    }
  }
`;