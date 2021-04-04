import React from 'react';
import styled from 'styled-components';
import Footer from './Footer.js';
import Nav from './Nav.js';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';


const ContentStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    min-height: 100vh;
    position: relative;
`
const Body = styled.div`
  grid-column: span 4;
  padding-bottom: 3.5rem;
`

export default function Layout({ children }) {
    return (
      <>
        <GlobalStyles />
        <Typography />
          <ContentStyles>
            <Nav css={css`
              grid-column: span 1;
            `}/>
            <Body>{children}</Body>
          </ContentStyles>
          <Footer />
      </>
    );
  }