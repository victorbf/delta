import { MIN_WIDTH } from 'src/utils/MediaQuery';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: ${MIN_WIDTH.DESKTOP}) {
    padding-right: 32px;
    padding-left: 32px;
    max-width: 1424px;
  }
`;
