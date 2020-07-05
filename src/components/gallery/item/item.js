import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, Trailer } from './item.css';
import ReactPlayer from 'react-player';

const Item = ({ title, copy, image, video, isTrailer }) => (
  <figure>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      { isTrailer ? (
        <Trailer>Watch the Trailer:</Trailer>
        ) : (
        ''
      )}
      
    </figcaption>
    {video ? (
      <ReactPlayer 
      url={video} 
      controls
      />
    ) : (
      <Img fixed={image ? image.childImageSharp.fixed : {}} alt={title} />
    )}
    
  </figure>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string,
  image: PropTypes.object,
  video: PropTypes.string,
  isTrailer: PropTypes.bool,
};

export default Item;
