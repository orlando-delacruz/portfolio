import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  list-style: none;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ $index }) => `${$index * 0.08}s`};

  &:hover {
    border-color: rgba(${theme.colors.primaryRgb}, 0.35);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(${theme.colors.primaryRgb}, 0.1);
  }

  @media ${theme.media.mobile} {
    padding: 24px 20px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(${theme.colors.primaryRgb}, 0.12);
  border: 1px solid rgba(${theme.colors.primaryRgb}, 0.2);
  margin-bottom: 16px;
  flex-shrink: 0;

  svg {
    color: ${theme.colors.primary};
    font-size: 24px;
  }

  ${Card}:hover & {
    background: rgba(${theme.colors.primaryRgb}, 0.22);
    border-color: rgba(${theme.colors.primaryRgb}, 0.45);
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const CardLink = styled.a`
  font-size: ${theme.typography.size.body};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color 0.2s ease;
  word-break: break-all;

  &:hover {
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const CardValue = styled.span`
  font-size: ${theme.typography.size.body};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
`;

export const CardDescription = styled.p`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  margin-top: 4px;
`;