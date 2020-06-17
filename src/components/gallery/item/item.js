import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import ReactPlayer from 'react-player';

const Item = ({ title, copy, image, video }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <ReactPlayer 
        url={video} 
        controls
        />
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
