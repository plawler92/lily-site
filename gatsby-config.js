module.exports = {
  siteMetadata: {
    title: "lily",
    tagline: "live. love. lily."
  },
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-netlify-cms",
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: false,
    //     langKeyForNull: 'en',
    //     prefixDefault: true,
    //   }
    // }
  ],
};
