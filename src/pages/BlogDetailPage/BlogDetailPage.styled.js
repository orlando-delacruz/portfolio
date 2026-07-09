import styled from 'styled-components';
import theme from '../../styles/theme';

export const PageWrapper = styled.main`
  background: ${theme.colors.background};
`;

export const HeroSection = styled.section`
  background: ${theme.colors.sectionBackground};
  padding: 140px 65px 80px;

  @media ${theme.media.tablet} {
    padding: 120px 30px 60px;
  }

  @media ${theme.media.mobile} {
    padding: 110px 20px 50px;
  }
`;

export const HeroInner = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

export const CategoryLabel = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const Title = styled.h1`
  font-size: clamp(2.25rem, 6vw, 3.438rem);
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.15;
  margin-top: 0.5rem;
  color: ${theme.colors.white};
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  font-size: ${theme.typography.size.sm};
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const AuthorInfoInline = styled.div`
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: ${theme.typography.size.sm};
`;

export const FeaturedImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin-top: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const ContentSection = styled.section`
  padding: 80px 65px;
  max-width: 820px;
  margin: 0 auto;

  @media ${theme.media.tablet} {
    padding: 60px 30px;
  }

  @media ${theme.media.mobile} {
    padding: 48px 20px;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 1rem;
  text-align: center;
  padding: 2rem;

  h2 {
    font-size: ${theme.typography.heading.h2};
    font-weight: ${theme.typography.weight.semibold};
  }

  p {
    color: rgba(255, 255, 255, 0.5);
  }

  a {
    color: ${theme.colors.primary};
    margin-top: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;