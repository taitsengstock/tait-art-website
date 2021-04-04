import React, { useRef, useState, useEffect } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import ArtworkListContext from './ArtworkListContext';
import { graphql, useStaticQuery } from 'gatsby';



const StyledNav = styled.nav`
  padding: 1rem;
  box-sizing: border-box;
`

export default function Nav() {
  const { allSanityMedium } = useStaticQuery(
    graphql`
      query {
        allSanityMedium {
          nodes {
            id
            name
            slug {
              current
            }
          }
        }
      }
    `
  )
  const mediums = allSanityMedium.nodes

  const [show, setShow] = useContext(ArtworkListContext)
  console.log(show)

  return (
    <StyledNav>
      <div>
        <h1>
          Tait Sengstock
        </h1>
      </div>
      <ul css={css`
        list-style-type: none;
        padding-inline-start: 0px;
      `}>
        <li>
          <button 
            onClick={() => setShow(null)}
            css={css`
              margin-bottom: 0.4rem;
            `} 
          >
            all
          </button>
        </li>
        {mediums && mediums.map(medium =>
        <li 
          key={medium.id}
          css={css`
            margin-bottom: 0.4rem;
          `} 
        >
            <button onClick={() => setShow(`${medium.slug.current}`)}>{medium.name}</button>
        </li>)
      }
      </ul>
    </StyledNav>
  );

}



