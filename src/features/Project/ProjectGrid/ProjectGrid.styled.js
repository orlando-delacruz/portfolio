import styled from "styled-components";
import theme from "../../../styles/theme";

export const GridSection = styled.section`
  background-color: ${theme.colors.sectionBackground};
  padding-top: 0 !important;
`;

export const ResultCount = styled.p`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1.25rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.188rem;
  align-items: stretch;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 5rem 0;
  color: rgba(255, 255, 255, 0.35);
  text-align: center;

  svg {
    font-size: 2.5rem;
    opacity: 0.3;
  }

  p {
    font-size: ${theme.typography.size.body};
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: ${theme.colors.primary};
  font-size: ${theme.typography.size.lg};
  text-align: center;
  padding: 2rem;
`;
