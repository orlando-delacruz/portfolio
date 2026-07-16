import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../styles/theme";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PreTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .eyebrow {
    height: 2px;
    width: 20px;
    background-color: ${theme.colors.primary};
    border-radius: 50px;
  }

  .pre-title {
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: ${theme.typography.weight.regular};
  }
`;

export const Title = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};

  .title-highlight {
    color: ${theme.colors.primary};
  }
`;
