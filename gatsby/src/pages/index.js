import { graphql } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import ArtworkList from '../components/artworklist/ArtworkList';
import ArtworkListContext from '../components/ArtworkListContext';

export default function HomePage({ data }) {
  
  console.log(data.artworks.nodes)
  const artworks = data.artworks.nodes; 
  // we got rid of this line
  // const [show, setShow] = useState(undefined)
  // now access show via context

  const [show, setShow] = useContext(ArtworkListContext)

  const [listedArtworks, setListedArtworks] = useState(undefined)

  useEffect(() => {
    let filtered = null
    if(show){
      filtered = artworks.filter(artwork => artwork.medium.slug.current === show)
    } else if (!show) {
      filtered = artworks
    }
    if (filtered) {
      setListedArtworks(filtered)
    }

  }, [show, setListedArtworks])

  return (
      <div>
          <ArtworkList artworks={listedArtworks} />
      </div>
  )
}

export const query = graphql`
  query ArtworkQuery {
    artworks: allSanityArtwork {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        medium {
          name
          id
          slug {
            current
          }
        }
        date 
      }
    }
  }
`;

