import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  box-sizing: border-box;
`
export default function Footer() {
    return (
      <StyledFooter>
          footer
      </StyledFooter>
    );
  }