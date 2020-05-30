import React from "react";
import { Global, css } from "frontity";
import Fonts from "./Fonts";

const Theme = () => {
  return (
    <>
      <Fonts />
      <Global
        styles={css`
          body {
            font-family: "Noticia Text";
            font-weight: 400;
            font-size: 20px;
            max-width: 800px;
            margin: auto;
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

export default Theme;
