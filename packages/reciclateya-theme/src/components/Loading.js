import React from "react";
import { css, connect } from "frontity";
import Container from "./structure/Container";

const Loading = () => (
  <Container>
    <h1
      css={css`
        text-align: center;
      `}
    >
      Cargando contenido
    </h1>
  </Container>
);

export default connect(Loading);
