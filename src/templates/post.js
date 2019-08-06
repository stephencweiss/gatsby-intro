import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      code {
        body
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const { frontmatter, code } = post;

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
      <MDXRenderer>{code.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to home</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
