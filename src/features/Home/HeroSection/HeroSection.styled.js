import styled from "styled-components";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";

/* ================= HERO WRAPPER ================= */

export const HeroWrapper = styled.section`
  background-color: ${theme.colors.background};
  padding-top: 150px;

  display: flex;
  justify-content: center;

  @media ${theme.media.tablet} {
    padding-top: 120px;

  }
`;

/* ================= CONTAINER (KEY FIX) ================= */

export const HeroContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ================= LEFT SIDE ================= */

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;

  @media ${theme.media.tablet} {
    order: 2;
  }
`;

/* ================= HEADING ================= */

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

/* ================= BADGE ================= */

export const Badge = styled.span`
  background-color: ${theme.colors.primary};
  padding: 5px 15px;
  border-radius: 50px;
  user-select: none;

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.xs};
  }
`;

/* ================= TITLE ================= */

export const Title = styled.h1`
  font-size: ${theme.typography.heading.h1};
  font-weight: ${theme.typography.weight.semibold};
  text-align: center;
  line-height: 1.2;

  span {
    background: linear-gradient(
      to right,
      ${theme.colors.primary},
      #547fdf
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

/* ================= SUBTITLE ================= */

export const SubTitle = styled.p`
  text-align: inherit;
  text-align: center;
`;

/* ================= BUTTONS ================= */

export const ActionButtons = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media ${theme.media.mobile} {
    gap: 14px;
    justify-content: center;
  }
`;

export const PrimaryButton = styled(Link)`
  padding: 15px 30px;
  background-color: ${theme.colors.primary};
  border-radius: 50px;
  font-size: ${theme.typography.size.lg};
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  svg {
    font-size: $${theme.typography.size.xl};
  }

  &:hover {
    background-color: ${theme.colors.primaryLight};
    transform: scale(1.05);
  }

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.sm};
    padding: 10px 25px;
  }
`;

export const SecondaryButton = styled(Link)`
  padding: 15px 30px;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  font-size: ${theme.typography.size.lg};
  cursor: pointer;
  transition: all 0.2s ease;

    svg {
    font-size: $${theme.typography.size.xl};
  }

  &:hover {
    transform: scale(1.05);
    background-color: rgba(${theme.colors.primaryRgb}, 0.1);
  }

  @media ${theme.media.mobile} {
    font-size: ${theme.typography.size.sm};
    padding: 10px 25px;
  }
`;

/* ================= SOCIALS ================= */

export const SocialLinkWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialLink = styled.a`
  padding: 10px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 50%;
  color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: ${theme.typography.size.xl};

  &:hover {
    background-color: rgba(${theme.colors.primaryRgb}, 0.1);
    color: ${theme.colors.white};
    transform: scale(1.05);
  }
`;

/* ================= RIGHT SIDE ================= */

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${theme.media.tablet} {
    order: 1;
  }
`;

/* ================= IMAGE ================= */

export const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 638px;

  .hero-image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;