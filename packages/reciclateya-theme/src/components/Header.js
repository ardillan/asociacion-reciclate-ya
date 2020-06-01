import React from "react";
import { connect } from "frontity";
import { styled, css } from "frontity";

import Link from "./Link";

const Header = ({ state }) => {
  return (
    <header
      css={css`
        background: #fff9d8;
        padding: 40px 20px;
      `}
    >
      <Navigation
        css={css`
          width: ${state.theme.screenSizes.desktop};
          margin: auto;
        `}
      >
        <Link href="/" color="initial">
          Inicio
        </Link>
        <Link href="/la-asociacion" color="initial">
          La asociación
        </Link>
        <Link href="/blog/" color="initial">
          Blog
        </Link>
        <Link href="/nuestros-amigos/" color="initial">
          Nuestros amigos
        </Link>
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
