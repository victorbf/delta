import { MIN_WIDTH } from 'src/utils/MediaQuery';
import styled from 'styled-components';

export const StudentsListContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: ${MIN_WIDTH.TABLET}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${MIN_WIDTH.DESKTOP}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
