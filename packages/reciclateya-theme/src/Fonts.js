import React from "react";
import { Global, css } from "frontity";

import BarlowRegular from "../assets/fonts/barlow/Barlow-Regular.ttf";
import BarlowSemiBold from "../assets/fonts/barlow/Barlow-SemiBold.ttf";
import BarlowBold from "../assets/fonts/barlow/Barlow-Bold.ttf";
import NoticiaTextRegular from "../assets/fonts/noticia_text/NoticiaText-Regular.ttf";
import NoticiaTextBold from "../assets/fonts/noticia_text/NoticiaText-Bold.ttf";

const Fonts = () => {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Barlow";
            src: url(${BarlowRegular}) format("truetype");
            font-weight: 400;
          }

          @font-face {
            font-family: "Barlow";
            src: url(${BarlowSemiBold}) format("truetype");
            font-weight: 600;
          }

          @font-face {
            font-family: "Barlow";
            src: url(${BarlowBold}) format("truetype");
            font-weight: 800;
          }

          @font-face {
            font-family: "Noticia Text";
            src: url(${NoticiaTextRegular}) format("truetype");
            font-weight: 400;
          }

          @font-face {
            font-family: "Noticia Text";
            src: url(${NoticiaTextBold}) format("truetype");
            font-weight: 800;
          }
        `}
      />
    </>
  );
};

export default Fonts;
