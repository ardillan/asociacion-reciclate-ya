import React from "react";
import { connect } from "frontity";
import { styled, css } from "frontity";

import Link from "./Link";
import waveImage from "../../assets/images/background-wave.svg";

const Header = ({ state }) => {
  return (
    <header
      css={css`
    background-color:${
      state.router.link === "/" ? state.theme.colors.softYellow : "transparent"
    };
      background-image: url("${waveImage}");
      padding: 40px 20px;
      background-size: 1400px 120px;
      background-repeat: no-repeat;
      background-position: top;
      min-height:50px;
      `}
    >
      <Navigation
        css={css`
          margin: auto;
          width: ${state.theme.screenSizes.container};
          /* Tablet */
          @media screen and (min-width: ${state.theme.screenSizes
              .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
            width: auto;
          }

          /* Mobile */
          @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
            width: auto;
          }
        `}
      >
        <Link href="/">Inicio</Link>
        <Link href="/la-asociacion">La asociación</Link>
        <Link href="/blog/">Blog</Link>
        <Link href="/nuestros-amigos/">Nuestros amigos</Link>
      </Navigation>
    </header>
  );
};

export default connect(Header);

const Navigation = styled.nav`
  text-align: center;
  display: flex;

  a {
    font-family: "Barlow";
    font-weight: 600;
    padding-right: 20px;
  }
`;
