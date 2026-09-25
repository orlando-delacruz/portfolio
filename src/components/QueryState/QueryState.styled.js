import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px 20px;
  min-height: 200px;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.textMuted};

  svg {
    font-size: 2rem;
    color: ${theme.colors.error};
  }

  p {
    font-size: ${theme.typography.size.body};
    max-width: 46ch;
  }
`;

export const RetryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 10px 24px;
  border-radius: 50px;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.white};
  background: transparent;
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(${theme.colors.primaryRgb}, 0.12);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-height: 200px;
  justify-content: center;
  padding: 20px 0;

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const SkeletonLine = styled.div`
  height: 20px;
  width: ${({ $narrow }) => ($narrow ? "55%" : "100%")};
  border-radius: 10px;
  background: linear-gradient(
    100deg,
    ${theme.colors.secondary} 40%,
    rgba(255, 255, 255, 0.05) 50%,
    ${theme.colors.secondary} 60%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
