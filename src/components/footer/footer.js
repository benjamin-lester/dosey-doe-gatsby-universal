import React from 'react';
import PropTypes from 'prop-types';
import Text from './footer.css';
import { Link } from 'gatsby';

const Footer = () => {
  return (
      <div style={{position:'absolute',bottom:'0'}}>
          <Link to="/">
            Test
        </Link>
    </div>
  );
};

export default Footer;
