  import { createGlobalStyle, css } from 'styled-components';

  export const breakpoints =  {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (max-width: 1230px)',
  desktopUp: '@media (min-width: 1025px)'
  }
  const { mobile } = breakpoints



  export const bodyStyles = css`

  `;

  const GlobalStyles = createGlobalStyle`

  :root{
    /* Global Tokens */
  --white: #ffffff;
  --blue: #6262de;
  --light-grey: #ebebeb;
  --shaded-grey: #e6e6e6;

  /* Tokens */
  --button-color: var(--blue);
  --text-base-size: 14px;
  }

  html{
    height: 100%; 
    font-size: var(--text-base-size);
  }
  body {
    height: 100%;
    background: linear-gradient( 45deg ,var(--light-grey),var(--shaded-grey));
  }
  h1, .h1 {
    display: block;
    font-size: var(--text-xl);
  }
  h2, .h2 {
    display: block;
    font-size: var(--text-xxl);
  }
  h3, .h3 {
    
  }
  `;

  export default GlobalStyles;