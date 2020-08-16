import React from "react";
import { Global, css, connect, Head } from "frontity";
import Fonts from "./Fonts";

const Theme = ({ state }) => {
  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="es" />
        <link rel="canonical" href={state.router.link} />
      </Head>
      <Fonts />
      <Global
        styles={css`
          ::selection {
            background: ${state.theme.colors.yellow};
          }
          body {
            font-family: "Noticia Text";
            font-weight: 400;
            font-size: 20px;
            margin: auto;
            color: #1f1c35;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Barlow";
          }

          figcaption {
            text-align: center;
            font-size: 16px;
            background: #fff;
            width: auto;
            margin-top: 20px;
            font-family: "Barlow";
            text-transform: uppercase;
          }
        `}
      />
    </>
  );
};

export default connect(Theme);
