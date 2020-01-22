module.exports = {
  siteMetadata: {
    title: `Página de la Asociación Recíclate YA`,
    description: `Es esta web podrás encontrar todo lo relacionado con la asociación, las salidas, galerías de fotos y muchos más.`,
    author: `@ardillan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `asociacionreciclateya.wordpress.com`,
        protocol: `https`,
        hostingWPCOM: true,
        useACF: true,
      },
    },
  ],
}
