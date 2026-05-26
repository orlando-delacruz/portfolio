import styled from "styled-components";
import theme from "../../styles/theme";
import footerData from "../../data/footer";

const { footerBg } = footerData;

export const FooterWrapper = styled.footer`
  padding-top: 112px;

  @media ${theme.media.tablet} {
    padding-top: 50px;
  }
`;

export const FooterContent = styled.section`
  background: url(${footerBg}) center / cover no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 65px 65px 0 0;
`;

export const Overlay = styled.div`
  background-color: ${theme.colors.overlay};
  position: absolute;
  inset: 0;
  border-radius: 65px 65px 0 0;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  position: relative;
  z-index: 1;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px;
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column1 = styled(Column)`
  gap: 24px;
`;

export const Column2 = styled(Column)`
  gap: 10px;
`;

export const Column3 = styled(Column)`
  gap: 10px;
`;

export const Column4 = styled(Column)`
  gap: 24px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const LogoImage = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media ${theme.media.tablet} {
    width: 45px;
    height: 45px;
  }
`;

export const LogoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoTitle = styled.h2`
  font-size: ${theme.typography.size.lg};
  font-weight: ${theme.typography.weight.medium};

  @media ${theme.media.tablet} {
    font-size: ${theme.typography.size.md};
  }
`;

export const LogoSubTitle = styled.p`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.light};
`;

export const FooterDescription = styled.p`
  font-size: ${theme.typography.size.sm};
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SocialLink = styled.a`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.size.lg};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const FooterTitle = styled.h3`
  font-size: ${theme.typography.heading.h3};
  font-weight: ${theme.typography.weight.medium};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const FooterLink = styled.a`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.2s ease;

  svg {
    font-size: ${theme.typography.size.body};
    flex-shrink: 0;
  }

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;