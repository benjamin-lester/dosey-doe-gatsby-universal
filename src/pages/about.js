import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Img from 'gatsby-image';
import { SocialIcon } from 'react-social-icons';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <div className='inlineRowColumn-halfsies'>
      <Img fluid={data.aboutJson.image.childImageSharp.fluid} alt={data.aboutJson.title} />
      </div>
      <div className='inlineRowColumn-halfsies'>
      <p 
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
      <SocialIcon url="mailto:doseydoefilms@gmail.com" />
      <SocialIcon url="https://www.instagram.com/doseydoefilms" />
      </div>
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image { 
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
