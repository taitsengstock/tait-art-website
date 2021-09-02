import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import usePlaceholder from "../../utils/usePlaceholder"
import { css } from 'styled-components';


export const Artwork = ({ artworkImage, artworkName, artworkSlug, artworkMedia, artworkMediaId, artworkMediaName, artworkDate }) => {

  const formatDate = (artworkDate) => {
    
  }

  const placeholder = usePlaceholder()

  return (     
          <Link 
            css={css`
              display: block;
              color: var(--button-color);
            `}
            to={`/artwork/${artworkSlug}`}
          >
            <div css={css`
              max-width: 60vh;
              margin: 40px auto;
            `}
            > 
              <Img fluid={artworkImage} /> 
              <div>{artworkName}</div> 
              <div>{artworkDate}</div> 
              { artworkDate && <div>{formatDate(artworkDate)}</div>}
              <div>{artworkMediaName}</div> 
            </div>
          </Link>
    );
}

Artwork.propTypes = {
  /**
   * Artwork contents
   */
  artworkName: PropTypes.string.isRequired,
  /**
   * Optional hover handler
   */
  onHover: PropTypes.func,
};

Artwork.defaultProps = {
  artworkName: 'test',
  artworkMediaName: 'test',
  onHover: PropTypes.func,
};


export default Artwork;