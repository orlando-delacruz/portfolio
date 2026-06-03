import styled from "styled-components";
import theme from "../../../styles/theme";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: ${theme.colors.primaryDark};
`;

export const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ServiceCard = styled.div`
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${theme.colors.secondary};
  border: 1px solid transparent;
  border-radius: 15px;
  height: 100%;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(${theme.colors.primaryRgb}, 0.35);
    transform: translateY(-3px);
  }
`;

export const CardHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const CardIcon = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  object-fit: contain;
`;

export const CardTitle = styled.h3`
  font-size: ${theme.typography.size.lg};
  font-weight: ${theme.typography.weight.semibold};
  text-align: center;
  color: ${theme.colors.white};
`;

export const CardBody = styled.p`
  font-size: ${theme.typography.size.sm};
  text-align: center;
  line-height: 1.65;
  color: ${theme.colors.gray};
  flex: 1;
`;

export const ServiceTag = styled.span`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.medium};
  padding: 4px 12px;
  border-radius: 20px;
  background-color: rgba(${theme.colors.primaryRgb}, 0.12);
  color: ${theme.colors.primary};
  letter-spacing: 0.02em;
`;