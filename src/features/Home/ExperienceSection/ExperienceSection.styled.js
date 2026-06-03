import styled from "styled-components";
import theme from "../../../styles/theme";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Timeline = styled.ol`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  list-style: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: rgba(${theme.colors.primaryRgb}, 0.5);
    border-radius: 2px;
  }
`;

export const TimelineEntry = styled.li`
  display: flex;
  gap: 24px;
  padding-bottom: 32px;

  &:last-child {
    padding-bottom: 0;
  }

  @media ${theme.media.mobile} {
    gap: 16px;
  }
`;

export const DotCol = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding-top: 6px;
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${theme.colors.primary};
  border: 3px solid ${theme.colors.background};
  flex-shrink: 0;
`;

export const JourneyCard = styled.div`
  flex: 1;
  background-color: ${theme.colors.secondary};
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(${theme.colors.primaryRgb}, 0.35);
  }

  @media ${theme.media.mobile} {
    padding: 18px 20px;
  }
`;

export const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.medium};
  color: ${theme.colors.primary};
  background-color: rgba(${theme.colors.primaryRgb}, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  width: fit-content;
  letter-spacing: 0.02em;
`;

export const Position = styled.h3`
  font-size: ${theme.typography.size.lg};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  margin: 4px 0 0;
`;

export const Company = styled.p`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.regular};
  color: ${theme.colors.gray};
  margin: 0;
`;

export const CardBody = styled.p`
  font-size: ${theme.typography.size.sm};
  color: ${theme.colors.gray};
  line-height: 1.65;
  margin: 8px 0 0;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
`;