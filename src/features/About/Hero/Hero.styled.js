import styled from "styled-components";
import theme from "../../../styles/theme";

export const SectionWrapper = styled.section`
  width: 100%;
  height: 350px;
  background-image: url(${({ $bg }) => $bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Heading = styled.h1`
  font-size: ${theme.typography.heading.h1};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  line-height: 1.2;
`;

export const Accent = styled.span`
  color: ${theme.colors.primary};
`;

export const Label = styled.span`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 50px;
  padding: 4px 14px;
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  display: flex;
  align-items: center;
  gap: 5px;
  user-select: none;
`;

export const Subheading = styled.p`
  font-size: ${theme.typography.size.body};
  color: rgba(255, 255, 255, 0.8);
`;