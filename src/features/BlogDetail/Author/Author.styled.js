import styled from 'styled-components';
import theme from '../../../styles/theme';

export const AuthorWrapper = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const AuthorCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(${theme.colors.primaryRgb}, 0.2);
  }

  @media ${theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.25rem;
    gap: 1rem;
  }
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, ${theme.colors.primary}, rgba(${theme.colors.primaryRgb}, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .fallback {
    font-size: 1.75rem;
    font-weight: ${theme.typography.weight.semibold};
    color: ${theme.colors.white};
    text-transform: uppercase;
  }

  @media ${theme.media.mobile} {
    width: 60px;
    height: 60px;
  }
`;

export const AuthorInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media ${theme.media.mobile} {
    align-items: center;
  }
`;

export const AuthorName = styled.h3`
  font-size: ${theme.typography.size.lg};
  font-weight: ${theme.typography.weight.semibold};
  color: ${theme.colors.white};
  margin: 0;
`;

export const AuthorRole = styled.p`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  color: ${theme.colors.primary};
  margin: 0;
`;

export const AuthorBio = styled.p`
  font-size: ${theme.typography.size.sm};
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0.25rem 0 0 0;
  max-width: 600px;

  @media ${theme.media.mobile} {
    max-width: 100%;
  }
`;