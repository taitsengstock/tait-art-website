import React, { useContext } from 'react';
import styled from 'styled-components';
import Artwork from './Artwork';
import Carousel from './Carousel';
import ListToolbar from './ListToolbar';
import ListViewContext from './ListViewContext';

const Gallery = styled.div`
  padding: 1rem;
`
export default function ArtworkList({ artworks }) {

  const [view, setView] = useContext(ListViewContext)
  console.log(view)

  return (
    <div>
      <ListToolbar />
      <Gallery>
        { artworks ?
        <div>
          { !view || view === 'carousel' ?
          <Carousel> 
            {artworks.map((artwork) => (
              <Artwork 
                key={artwork.id} 
                artwork={artwork} 
                artworkImage={artwork.image.asset.fluid} 
                artworkName={artwork.name}
                artworkSlug={artwork.slug.current}
                artworkMedia={artwork.medium}
                artworkMediaName={artwork.medium.name}
                artworkMediaSlug={artwork.medium.slug.current}
                />
            ))}
          </Carousel>
          : <div css={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          `}> 
              {artworks.map((artwork) => (
                <Artwork 
                  key={artwork.id} 
                  artwork={artwork} 
                  artworkImage={artwork.image.asset.fluid} 
                  artworkName={artwork.name}
                  artworkSlug={artwork.slug.current}
                  artworkMedia={artwork.medium}
                  artworkMediaName={artwork.medium.name}
                  artworkMediaSlug={artwork.medium.slug.current}
                  />
              ))}
            </div>
          }
        </div>
        : null}
      </Gallery>
    </div>
  );
}