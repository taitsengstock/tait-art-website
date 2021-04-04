import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`

  height: 100%;
  background: linear-gradient( 45deg ,#ebebeb,#e6e6e6);
  /* Same as before */
  h2 {
      display: block;
  }
`;

const GlobalStyles = createGlobalStyle`
 html{
    height: 100%; 
  }
 body {
   ${bodyStyles}
 }
 `;

export default GlobalStyles;