import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../styles/theme';

export const GlobalStyle = createGlobalStyle`
  body.lightbox-open {
    overflow: hidden;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const Modal = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const Image = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  user-select: none;
  -webkit-user-drag: none;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 24px;
  right: 30px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 10001;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 576px) {
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    font-size: 22px;
  }
`;
export const NavButton = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 10000;

  ${({ $side }) => {
    if ($side === 'prev') return `left: 24px;`;
    if ($side === 'next') return `right: 24px;`;
    return '';
  }}

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
    ${({ $side }) => {
    if ($side === 'prev') return `left: 12px;`;
    if ($side === 'next') return `right: 12px;`;
    return '';
  }}
  }
`;

export const Counter = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: ${theme.typography.size.sm};
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 16px;
  border-radius: 20px;
  pointer-events: none;
  z-index: 10001;
`;