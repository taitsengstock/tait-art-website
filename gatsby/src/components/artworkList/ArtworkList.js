import React, { useContext } from 'react';
import styled from 'styled-components';
import Artwork from '../artwork/Artwork';
import Carousel from '../Carousel';
import ListToolbar from '../ListToolbar/ListToolbar';
import ListViewContext from '../ListViewContext';

const Gallery = styled.div`
  padding: 1rem;
`
export const ArtworkList = ({ artworks }) => {

  const [view, setView] = useContext(ListViewContext)

  // const ArtworkDate = {formatDate({artwork.date})}

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
                artworkDate={artwork.date}
                key={artwork.id}
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
                  key={artwork.id}
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

export default ArtworkList;