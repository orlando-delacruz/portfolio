import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../styles/theme";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
  background-color: ${theme.colors.sectionBackground};
`;

export const ContentGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.188rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyState = styled(motion.p)`
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
`;

export const ErrorState = styled(motion.p)`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;
