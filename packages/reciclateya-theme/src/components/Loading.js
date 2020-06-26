import React from "react";
import { css, connect } from "frontity";
import loaderImage from "../../assets/images/loader.gif";
import Container from "./structure/Container";

const Loading = () => (
  <Container>
    <img
      src={loaderImage}
      css={css`
        margin: auto;
      `}
    />
    <h1
      css={css`
        text-align: center;
        font-size: 20px;
      `}
    >
      Cargando contenido
    </h1>
  </Container>
);

export default connect(Loading);
