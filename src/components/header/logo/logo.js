import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './logo.css';

const Logo = ({ title, logo }) => (
  <figure>
    <Img fluid={logo ? logo.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
    </figcaption>
  </figure>
);

Logo.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Logo;