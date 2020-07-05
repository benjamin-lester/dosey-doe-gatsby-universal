import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import ReactPlayer from 'react-player';

const Item = ({ title, copy, image, video }) => (
  <figure>
    {image ? (
      <Img fixed={image ? image.childImageSharp.fixed : {}} alt={title} />
    ) : (
      <ReactPlayer 
        url={video} 
        controls
        />
    )}
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string,
  image: PropTypes.object,
  video: PropTypes.string,
};

export default Item;
