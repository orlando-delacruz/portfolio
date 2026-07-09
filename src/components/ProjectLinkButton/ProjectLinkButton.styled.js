import styled from 'styled-components';
import theme from '../../styles/theme';

export const ButtonWrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover .tooltip {
    opacity: 1 !important;
    visibility: visible !important;
  }
`;

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  border-radius: 50px;
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.medium};
  font-family: inherit;
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? 'help' : 'pointer')};
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  border: 1px solid
    ${({ $variant, $disabled }) => {
    if ($disabled) return 'rgba(255, 255, 255, 0.15)';
    if ($variant === 'primary') return theme.colors.primary;
    return 'rgba(255, 255, 255, 0.15)';
  }};
  background: ${({ $variant, $disabled }) => {
    if ($disabled) return 'transparent';
    if ($variant === 'primary') return theme.colors.primary;
    return 'transparent';
  }};
  color: ${({ $variant, $disabled }) => {
    if ($disabled) return 'rgba(255, 255, 255, 0.4)';
    if ($variant === 'primary') return theme.colors.white;
    return 'rgba(255, 255, 255, 0.65)';
  }};

  /* Allow hover on wrapper when button is disabled */
  ${({ $disabled }) =>
    $disabled &&
    `
      pointer-events: none;
    `}

  svg {
    font-size: 0.8rem;
  }

  &:hover:not([disabled]) {
    background: ${({ $variant }) => {
    if ($variant === 'primary') return `rgba(${theme.colors.primaryRgb}, 0.8)`;
    return 'rgba(255, 255, 255, 0.08)';
  }};
    color: ${({ $variant }) => {
    if ($variant === 'primary') return theme.colors.white;
    return theme.colors.white;
  }};
    border-color: ${({ $variant }) => {
    if ($variant === 'primary') return `rgba(${theme.colors.primaryRgb}, 0.8)`;
    return 'rgba(255, 255, 255, 0.28)';
  }};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  font-size: 0.6rem;
  font-weight: ${theme.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  margin-left: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: ${theme.typography.size.xs};
  line-height: 1.4;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  pointer-events: none;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 9999;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: ${theme.colors.secondary};
  }

  @media (max-width: 576px) {
    white-space: normal;
    max-width: 200px;
    transform: translateX(-50%);
  }
`;