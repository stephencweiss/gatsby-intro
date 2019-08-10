exports.createPages = async ({ actions, graphql, reporter }) => {
  // In node (which this is), graphql is a function that takes a string.
  const result = await graphql(`
    query {
      posts:allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
      blog:allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const postNode = result.data.posts.nodes;
  const blogNodes = result.data.blog.nodes;

  postNode.forEach(post => {
    if (post.childMdx === null) return;
    const path = post.childMdx.frontmatter.slug;
    actions.createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.childMdx.frontmatter.slug,
      },
    });
  })

  blogNodes.forEach(post => {
    const path = post.childMdx.frontmatter.slug;
    if (post.childMdx === null) return;
    actions.createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.childMdx.frontmatter.slug,
      },
    });
  })
  ;
};
