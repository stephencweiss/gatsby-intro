import React from 'react';
import StyledImage from './image.styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export const query = graphql`
query($name: String!) {
      file(name: { eq: $name }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            tracedSVG
            srcSetWebp
          }
        }
      }
    };
`;

const PostImage = ({ src }) => {
  console.log({ src });
  const { image } = useStaticQuery(graphql`
  query($name: String!) {
    file(name: { eq: $name }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          tracedSVG
          srcSetWebp
        }
      }
    }
  };
  `);
  console.log({ query, image });
  return <div>spacer</div>;
  // return <StyledImage src={props.src} />;
};

export default PostImage;
