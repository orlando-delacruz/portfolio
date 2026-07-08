import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

export const Accordion = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 820px;
  list-style: none;
`;

export const AccordionItem = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.3s ease, background 0.3s ease;
  animation: ${fadeUp} 0.4s ease both;

  &:hover {
    border-color: rgba(${theme.colors.primaryRgb}, 0.2);
  }
`;

export const QuestionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 20px 24px;
  background: transparent;
  border: none;
  color: ${theme.colors.white};
  font-family: inherit;
  font-size: ${theme.typography.size.body};
  font-weight: ${theme.typography.weight.medium};
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease;
  border-radius: 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: -2px;
    border-radius: 12px;
  }

  @media ${theme.media.mobile} {
    padding: 16px 18px;
    font-size: ${theme.typography.size.sm};
  }
`;

export const QuestionText = styled.span`
  flex: 1;
  line-height: 1.4;
`;

export const Indicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(${theme.colors.primaryRgb}, 0.1);
  color: ${theme.colors.primary};
  transition: background 0.2s ease, transform 0.3s ease;

  svg {
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  ${QuestionButton}:hover & {
    background: rgba(${theme.colors.primaryRgb}, 0.2);
  }
`;

export const AnswerWrapper = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const AnswerText = styled.div`
  padding: 0 24px 20px 24px;
  font-size: ${theme.typography.size.sm};
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media ${theme.media.mobile} {
    padding: 0 18px 16px 18px;
    font-size: ${theme.typography.size.sm};
  }
`;