import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Gallery from 'components/gallery';

const Projects = ({ data }) => (
  <Layout>
    <Head pageTitle={data.projectsJson.title} />
    <Gallery items={data.projectsJson.gallery} />
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
    query ProjectsQuery {
        projectsJson {
            title
            gallery {
                title
                copy
                image {
                    childImageSharp {
                      fixed(width: 640) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                }
                video
                isTrailer
            }
        }
    }
`;
