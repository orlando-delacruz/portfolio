import styled from "styled-components";
import theme from "../../styles/theme";

export const CtaWrapper = styled.section`
  min-height: 564px;
`;

export const CtaContent = styled.div`
  background: linear-gradient(to right, #001d5e 41%, #0b1222 100%);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  padding: 50px;
  border-radius: 30px;
  overflow: visible;
  position: relative;
  min-height: 372px;

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
  gap: 24px;
  min-height: 272px;

  @media ${theme.media.tablet} {
    order: 2;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  text-align: center;
  color: ${theme.colors.white};
  line-height: 1.2;
  max-width: 18ch;
  margin: 0 auto;
`;

export const Description = styled.p`
   text-align: center;
  max-width: 45ch;
  margin: 0 auto;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  min-height: 56px;
  margin: 0 auto;

  @media ${theme.media.mobile} {
    gap: 14px;
  }
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

  @media ${theme.media.mobile} {
    padding: 10px 20px;
    font-size: ${theme.typography.size.sm};
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

  @media ${theme.media.tablet} {
    order: 1;
  }
`;

export const CtaImage = styled.div`
  max-width: 392px;
  max-height: 452px;
  z-index: 3;
  position: absolute;
  right: 0;
  top: -80px;
  

  img {
     width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;

  aspect-ratio: 392 / 452;
  }

  
  @media ${theme.media.tablet} {
    position: static;
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