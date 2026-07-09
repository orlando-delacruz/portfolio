import styled from 'styled-components';
import theme from '../../../styles/theme';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
  background-color: ${theme.colors.sectionBackground};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.188rem;
  row-gap: 2.188rem;
  width: 100%;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;