import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  min-height: ${({ $fullPage }) => ($fullPage ? '60vh' : 'auto')};
`;

export const Spinner = styled.div`
  width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '24px';
      case 'large':
        return '56px';
      default:
        return '40px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '24px';
      case 'large':
        return '56px';
      default:
        return '40px';
    }
  }};
  border: 3px solid rgba(${theme.colors.primaryRgb}, 0.15);
  border-top-color: ${theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingText = styled.p`
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.5);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

// Optional: Skeleton loader for cards (for future use)
export const SkeletonCard = styled.div`
  border-radius: 1.25rem;
  overflow: hidden;
  background-color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 300px;
  animation: ${pulse} 1.5s ease-in-out infinite;

  .skeleton-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: rgba(255, 255, 255, 0.06);
  }

  .skeleton-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;
  }

  .skeleton-line {
    height: 16px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    width: ${({ $lineWidth }) => $lineWidth || '100%'};
  }

  .skeleton-line.short {
    width: 60%;
  }
`;