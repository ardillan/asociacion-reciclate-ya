import React from "react";
import { connect, styled, css } from "frontity";

import Container from "./structure/Container";
import Link from "./Link";
import Footer from "./Footer";

const Error = ({ state }) => {
  const ErrorText = styled.div`
    text-align: center;

    a {
      font-family: "Noticia Text";
      background: ${state.theme.colors.softYellow};
    }
  `;

  const ErrorURL = styled.div`
    span {
      border: 2px dashed ${state.theme.colors.yellow};
      padding: 5px;
      border-radius: 5px;
      cursor: not-allowed;
    }
  `;

  return (
    <>
      <Container>
        <ErrorText>
          <span
            css={css`
              font-size: 150px;
            `}
          >
            🚲
          </span>
          <h1>Parece que se te ha salido la cadena</h1>
          <p>
            Es broma. En realidad{" "}
            <strong>la página que estás buscando no existe</strong>.
          </p>
          <p>
            Puedes volver al <Link href="/">inicio</Link>, o bien{" "}
            <strong>comprobar</strong> si el <strong>enlace</strong> que has
            introducido es <strong>correcto</strong>:
          </p>
          <ErrorURL>
            <p>
              <span>{`${state.frontity.url}${state.router.link}`}</span>
            </p>
          </ErrorURL>
        </ErrorText>
      </Container>
      <Footer />
    </>
  );
};

export default connect(Error);
