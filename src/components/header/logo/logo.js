import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './logo.css';

const Logo = ({ title, logo }) => (
 
    <Img  fluid={logo.childImageSharp.fluid} 
          alt={title} 
          style={{width:'125px'}}
          imgStyle={{
            objectFit: "none",
          }}
          />

  // <figcaption>
  //     <Title>{title}</Title>
  //   </figcaption>

);

Logo.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.object.isRequired
};

export default Logo;