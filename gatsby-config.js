module.exports = {
  siteMetadata: {
    title: `Página de la Asociación Recíclate YA`,
    description: `Es esta web podrás encontrar todo lo relacionado con la asociación, las salidas, galerías de fotos y muchos más.`,
    author: `@ardillan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/content/nuestros-amigos/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `asociacionreciclateya.wordpress.com`,
        protocol: `https`,
        hostingWPCOM: true,
      },
    },
  ],
}
