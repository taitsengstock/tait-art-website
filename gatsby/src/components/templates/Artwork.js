import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function SingleArtworkPage({ data: { artwork } }) {
    return (
      <div>
        <h1>{artwork.name}</h1>
        <Img fluid={artwork.image.asset.fluid} />
      </div>
    );
  }
  
  // this needs to be dynamic based on the slug passed in via gatsby-node.js
  export const query = graphql`
    query($slug: String!) {
      artwork: sanityArtwork(slug: { current: { eq: $slug } }) {
        name
        id
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `;
  