import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.p`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 2px;
    background: ${theme.colors.primary};
    border-radius: 50px;
    flex-shrink: 0;
  }
`;

export const Heading = styled.h2`
  font-size: ${theme.typography.heading.h3};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.25;
  letter-spacing: -0.015em;
`;

export const Description = styled.p`
  font-size: ${theme.typography.size.body};
  color: rgba(255, 255, 255, 0.55);
  max-width: 600px;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

export const ImageWrapper = styled.li`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`;

export const EmptyState = styled.div`
  padding: 2rem 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.35);
  font-size: ${theme.typography.size.sm};
`;