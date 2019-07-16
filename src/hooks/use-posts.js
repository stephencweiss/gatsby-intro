import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
          wordCount {
            words
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(posts => ({
    title: posts.frontmatter.title,
    author: posts.frontmatter.author,
    slug: posts.frontmatter.slug,
    excerpt: posts.exceprt,
  }));
};

export default usePosts;
