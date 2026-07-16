import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";

export const AboutWrapper = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImageWrapper = styled(motion.div)`
  max-width: 638px;
  width: 100%;
  max-height: 430px;
  height: 100%;
  border: 2px solid ${theme.colors.primary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  .about-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${theme.colors.primaryLight};
    box-shadow: 0 12px 40px rgba(${theme.colors.primaryRgb}, 0.25);
  }

  &:hover .about-image {
    transform: scale(1.06);
  }
`;

export const RightContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: start;
  align-items: start;

  @media ${theme.media.tablet} {
    align-items: center;
  }
`;

export const Heading = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media ${theme.media.tablet} {
    text-align: center;
  }

  .pre-title {
    font-size: calc(16, 3vw, 24px);
    font-weight: ${theme.typography.weight.medium};
  }

  .title {
    font-size: ${theme.typography.heading.h2};
    font-weight: ${theme.typography.weight.semibold};
  }

  .title-highlight {
    color: ${theme.colors.primary};
  }
`;

export const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const ActionButton = styled(motion.create(Link))`
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border-radius: 50px;
  padding: 10px 20px;
  font-size: ${theme.typography.size.body};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.white};
  }
`;
