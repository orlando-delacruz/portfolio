import styled from "styled-components";
import theme from "../../styles/theme";

export const CtaWrapper = styled.section`
`

export const CtaContent = styled.div`
  background: linear-gradient(to right, #001D5E 41%, #0B1222 100%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px;
  border-radius: 30px;
  position: relative;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  gap: 50px;

  }
`

export const CtaDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media ${theme.media.tablet} {
    order: 2;
  }
`

export const Title = styled.h2`
  font-size: ${theme.typography.heading.h2};
font-weight: ${theme.typography.weight.semibold};
text-align: center;
`

export const Description = styled.p`
text-align: center;
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const PrimaryButton = styled.a`
  background-color: ${theme.colors.primary};
  padding: 15px 30px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  border: 1px solid ${theme.colors.primary};

  &:hover {
    transform: scale(1.05);
    background-color: ${theme.colors.primaryLight};
  border: 1px solid ${theme.colors.primaryLight};

  }
`
export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid ${theme.colors.white};
`

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media ${theme.media.tablet} {
    order: 1;
  }
`

export const CtaImage = styled.div`
  max-width: 456px;
  max-height: 392px;
  position: absolute;
  top: -80px;
  right: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${theme.media.tablet} {
    position: static;

  }
`