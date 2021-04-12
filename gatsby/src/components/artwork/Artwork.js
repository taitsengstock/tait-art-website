import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import usePlaceholder from "../../utils/usePlaceholder"
import PalceholderImage from "../../assets/images/placeholder-artwork.jpg";
import { css } from 'styled-components';


export const Artwork = ({ artworkImage, artworkName, artworkSlug, artworkMedia, artworkMediaId, artworkMediaName }) => {

  const placeholder = usePlaceholder()
  console.log(placeholder)

  return (     
          <Link 
            css={css`
              display: block;
            `}
            to={`/artwork/${artworkSlug}`}
          >
            <div css={css`
              max-width: 60vh;
              margin: 40px auto;
            `}
            > 
              <Img fluid={placeholder.asset.fluid} /> 
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
    // artworkImage: 'placeholder',
    onHover: PropTypes.func,
  };


  export default Artwork;