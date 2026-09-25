import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../styles/theme";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Timeline = styled(motion.ol)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  list-style: none;
  position: relative;
`;

export const TimelineLine = styled(motion.div)`
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: rgba(${theme.colors.primaryRgb}, 0.75);
  border-radius: 2px;
  transform-origin: top;
`;

export const TimelineEntry = styled(motion.li)`
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

export const Dot = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${theme.colors.primary};
  border: 3px solid ${theme.colors.background};
  flex-shrink: 0;
`;

export const JourneyCard = styled(motion.div)`
  flex: 1;
  background-color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.borderSubtle};
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${theme.media.mobile} {
    padding: 18px 20px;
  }
`;

export const DateBadge = styled(motion.div)`
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

export const Position = styled(motion.h3)`
  font-size: ${theme.typography.size.lg};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  margin: 4px 0 0;
`;

export const Company = styled(motion.p)`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  color: ${theme.colors.textSecondary};
  margin: 0;
`;

export const CardBody = styled(motion.p)`
  font-size: ${theme.typography.size.sm};
  color: ${theme.colors.textMuted};
  line-height: 1.7;
  margin: 8px 0 0;
  padding-top: 12px;
  border-top: 1px solid ${theme.colors.borderSubtle};
`;
