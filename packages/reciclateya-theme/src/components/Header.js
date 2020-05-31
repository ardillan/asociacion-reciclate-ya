import React from "react";
import { connect } from "frontity";
import { styled, css } from "frontity";

import Link from "./Link";

const Header = ({ state }) => {
  return (
    <header
      css={css`
        background: #fff9d8;
        padding: 20px;
      `}
    >
      <Navigation>
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
  max-width: 50%;
  text-align: center;
  display: flex;
  justify-content: space-between;

  a {
    font-family: "Barlow";
    font-weight: 400;
  }
`;
