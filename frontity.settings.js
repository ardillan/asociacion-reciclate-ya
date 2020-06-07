const settings = {
  name: "Asociación Recíclate YA",
  state: {
    frontity: {
      url: "https://www.reciclateya.com",
      title: "Asociación Recíclate YA",
      description: "Página web de la Asociación Recíclate YA",
    },
  },
  packages: [
    {
      name: "reciclateya-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
          screenSizes: {
            desktop: "1200px",
            tablet: "768px",
            mobile: "480px",
            container: "900px",
            pageContainer: "800px",
          },
          colors: {
            yellow: "#FFE607",
            softYellow: "#FFF9D8",
            dark: "#27214D",
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://public-api.wordpress.com/wp/v2/sites/asociacionreciclateya.wordpress.com",
        },
        postsPage: "/blog/",
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
