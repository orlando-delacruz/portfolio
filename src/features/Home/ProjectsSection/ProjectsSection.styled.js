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
  grid-template-columns: repeat(3, 1fr);
  gap: 2.188rem;
  width: 100%;

  @media ${theme.media.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.188rem;
  width: 100%;
  min-height: 320px;

  @media ${theme.media.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const SkeletonCard = styled.div`
  min-height: 320px;
  border-radius: 1.25rem;
  border: 1px solid ${theme.colors.borderSubtle};
  background: linear-gradient(
    100deg,
    ${theme.colors.secondary} 40%,
    rgba(255, 255, 255, 0.04) 50%,
    ${theme.colors.secondary} 60%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;

  @keyframes skeleton-shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const EmptyState = styled(motion.p)`
  color: ${theme.colors.textMuted};
  text-align: center;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorState = styled(motion.p)`
  color: ${theme.colors.error};
  text-align: center;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
