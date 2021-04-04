import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PalceholderImage from "../assets/images/placeholder-artwork.jpg";
import { css } from 'styled-components';


export const Artwork = ({ artworkImage, artworkName, artworkSlug, artworkMedia, artworkMediaId, artworkMediaName }) => {
    console.log(artworkImage.src)
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
              { artworkImage.src ? <Img fluid={artworkImage} /> 
              : <img 
              css={css`
                width: 100%;
                box-shadow: 17px 0px 15px -2px #beb7ad;
              `}
              src={PalceholderImage}
              />} 
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
    artworkImage: PalceholderImage,
    artworkName: 'test',
    onHover: PropTypes.func,
  };


  export default Artwork;