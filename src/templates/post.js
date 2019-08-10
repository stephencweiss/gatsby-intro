import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        image {
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const { frontmatter, body } = post;
  const { image } = frontmatter;
  console.log({ image });
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        {`posted by ${frontmatter.author}`}
      </p>
      <MDXRenderer>{body}</MDXRenderer>
      {/* <pre>{image}</pre> */}
      <ReadLink to="/">&larr; back to home</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
