import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily}
  }
`;
