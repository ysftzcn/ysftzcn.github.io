module.exports = {
  siteMetadata: {
    description: 'Personal page of Yusuf TEZCAN',
    locale: 'en',
    title: 'Yusuf TEZCAN',
  },
  plugins: [
    {
      resolve: '@wkocjan/gatsby-theme-intro',
      options: {
        basePath: '/',
        contentPath: 'content/',
        theme: 'classic',
      },
    },
  ],
};
