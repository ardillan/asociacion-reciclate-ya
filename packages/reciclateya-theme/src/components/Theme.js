import React from "react";
import { Global, css, connect } from "frontity";
import Fonts from "./Fonts";

const Theme = ({ state }) => {
  return (
    <>
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
        `}
      />
    </>
  );
};

export default connect(Theme);
