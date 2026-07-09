import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const shimIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

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
  cursor: pointer;

  &:focus-visible {
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
    flex-wrap: nowrap;
    gap: 0.6rem;
    font-size: ${theme.typography.size.xs};
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    min-width: 0; /* allows shrinking */

    .meta-wrapper {
      display: flex;
      gap: 5px;
    }

    .sep {
      opacity: 0.35;
      font-size: 0.45rem;
      flex-shrink: 0;
    }

    .category {
      color: ${theme.colors.primary};
      font-weight: ${theme.typography.weight.medium};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Duration also should not wrap */
    & > div:last-child dd {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const CardBody = styled.p`
  font-size: ${theme.typography.size.body};
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin: 0;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;