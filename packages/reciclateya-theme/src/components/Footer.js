import React from "react";
import { connect, styled } from "frontity";

const Footer = ({ state }) => {
  const FooterBackground = styled.div`
    background: ${state.theme.colors.softYellow};
    width: 100vw;
    padding: 25px 0;
    margin-top: 50px;
  `;

  const FooterContainer = styled.footer`
    width: ${state.theme.screenSizes.container};
    margin: auto;
    position: relative;
  `;

  const InfoBoxes = styled.div`
    ul {
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      text-align: center;
    }

    li {
      border: 4px solid ${state.theme.colors.yellow};
      background: white;
      list-style-type: none;
      font-family: "Barlow";
      display: flex;
      padding: 30px;
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
                  Nuestro local está situado en Torrelavega, Calle Carrera nº 12
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Horario</h3>
                <p>Martes y Jueves  de 19:00 a 21:00</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Recíclate YA</h3>
                <p>
                  Es una asociación que fomentamos el reciclaje y el uso de la
                  bicicleta como medio de transporte habitual.
                </p>
              </div>
            </li>
          </ul>
        </InfoBoxes>
        <BottomLine>
          <p>Hecho con Frontity y WordPress</p>
          <p>¿Te gusta esta web? Recíclala y crea la tuya propia</p>
        </BottomLine>
      </FooterContainer>
    </FooterBackground>
  );
};

export default connect(Footer);
