import React from "react";
import { connect, styled, css } from "frontity";

const Footer = ({ state }) => {
  const FooterBackground = styled.div`
    background: ${state.theme.colors.softYellow};
    width: 100vw;
    padding: 25px 0;
    margin-top: 250px;
  `;

  const FooterContainer = styled.footer`
    width: ${state.theme.screenSizes.container};
    margin: -160px auto auto;
    position: relative;

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      padding: 30px;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      padding: 30px;
    }
  `;

  const InfoBoxes = styled.div`
    ul {
      padding: 0;
      display: grid;
      grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
      grid-gap: 20px;
      text-align: center;
    }

    li {
      border: 4px solid ${state.theme.colors.yellow};
      background: white;
      list-style-type: none;
      font-family: "Barlow";
      display: flex;
      justify-content: center;
      padding: 30px;
    }

    a {
      color: initial;
      text-decoration-color: ${state.theme.colors.yellow};

      :hover {
        text-decoration-color: ${state.theme.colors.dark};
      }
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      ul {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      ul {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }

      li {
        padding: 10px;
      }
    }
  `;

  const BottomLine = styled.div`
    text-align: center;
  `;

  return (
    <FooterBackground>
      <FooterContainer>
        <InfoBoxes>
          <ul>
            <li>
              <div>
                <h3>¿Dónde estamos?</h3>
                <p>
                  Nuestro local está situado en Torrelavega, Calle Carrera nº 8
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Horario</h3>
                <p>Martes y Jueves de 19:00 a 21:00</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Contacto</h3>
                <a href="tel:648115693">648 11 56 93</a>
                <br />
                <a href="mailto:reciclateyusalabici@gmail.com?subject=Recíclate%20YA%20|%20Contacto%20desde%20la%20web">
                  reciclateyusalabici@gmail.com
                </a>
                <br />
                <a href="https://www.facebook.com/reciclateya">Facebook</a>
              </div>
            </li>
          </ul>
        </InfoBoxes>
        <BottomLine>
          <p>
            Hecho con{" "}
            <a
              href="https://frontity.org/"
              target="_blank"
              css={css`
                color: initial;
              `}
            >
              Frontity
            </a>{" "}
            y{" "}
            <a
              href="https://wordpress.com/"
              target="_blank"
              css={css`
                color: initial;
              `}
            >
              WordPress
            </a>
          </p>
          <p>
            ¿Te gusta esta web?{" "}
            <a
              href="https://github.com/ardillan/asociacion-reciclate-ya"
              target="_blank"
              css={css`
                color: initial;
              `}
            >
              Recíclala y crea la tuya propia
            </a>
          </p>
        </BottomLine>
      </FooterContainer>
    </FooterBackground>
  );
};

export default connect(Footer);
