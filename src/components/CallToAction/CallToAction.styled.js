import styled from "styled-components";
import theme from "../../styles/theme";

export const CtaWrapper = styled.section`
`;

export const CtaContent = styled.div`
  background: linear-gradient(to right, #001d5e 41%, #0b1222 100%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px;
  border-radius: 30px;
  overflow: visible;
  position: relative;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 20px;
  background: linear-gradient(to bottom, #001d5e 41%, #0b1222 100%);

  }
`;

export const CtaDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media ${theme.media.tablet} {
    order: 2;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  text-align: center;
  color: ${theme.colors.white};
`;

export const Description = styled.p`
  text-align: center;
  color: ${theme.colors.white};
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  background-color: ${theme.colors.primary};
  padding: 15px 30px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.weight.medium};
  font-size: ${theme.typography.size.body};
  text-decoration: none;
  will-change: transform;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

  &:focus-visible {
    outline: 3px solid ${theme.colors.white};
    outline-offset: 3px;
  }

  &:hover {
    transform: scale(1.05);
    background-color: ${theme.colors.primaryLight};
    border-color: ${theme.colors.primaryLight};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid ${theme.colors.white};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: ${theme.colors.white};
  }
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  @media ${theme.media.tablet} {
    order: 1;
  }
`;

export const CtaImage = styled.div`
  max-width: 392.88px;
  max-height: 452px;
  position: absolute;
  top: -80px;
  right: 0;
  z-index: 3;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  
  @media ${theme.media.tablet} {
    position: static;
    max-width: 100%;
  }
`;

export const Vector = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  @media ${theme.media.tablet} {
    display: none;
  }
`