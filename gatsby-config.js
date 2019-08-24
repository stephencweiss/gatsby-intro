module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby workshop!',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        plugins: [`gatsby-remark-images`],
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // markdownCaptions: true,
              // linkImagesToOriginal: false,
              // showCaptions: ['title', 'alt'],
              withWebp: true,
              // maxWidth: 960,
              // quality: 80,
              tracedSVG: {
                color: `lightgray`,
                optTolerance: 0.4,
                turdSize: 100,
                turnPolicy: 'TURNPOLICY_MAJORITY',
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'content/posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'content/blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'content/images',
      },
    },
  ],
};
