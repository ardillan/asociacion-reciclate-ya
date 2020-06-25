import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import { renderText, formatDate } from "../utils/helpers";

import Footer from "./Footer";
import Separator from "../components/structure/Separator";

import mainHeaderImage from "../../assets/images/background-main-header.svg";
import bikeImage from "../../assets/images/home_cover.png";
import groupImage from "../../assets/images/foto-grupo-01.jpg";

const Home = ({ state, posts }) => {
  const Items = styled.div`
    width: ${state.theme.screenSizes.container};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    grid-gap: 2rem;
    margin-top: 20px;
    align-items: space-around;
    padding: 20px;
    margin: 25px auto;

    h2 {
      font-size: 25px;
      font-weight: 600;
    }

    date {
      font-size: 14px;
    }

    p {
      font-size: 1rem;
      font-family: "Noticia Text";
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      margin: 0;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
    }
  `;

  const MainHeader = styled.div`
    padding: 20px;

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: 100%;
      height: inherit;
      padding: 0;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      background-color: ${state.theme.colors.softYellow};
    }
  `;

  const MainHeaderBackground = styled.div`
    background-image: url("${mainHeaderImage}");
    width: 100%;
    background-repeat: no-repeat;
    top: -400px;
    position: absolute;
    z-index: -1;
    background-position: center;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      top: -140px;
      background-size: cover;
      min-height: 240px;
      position: relative;
      margin-bottom: -160px;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      top: -140px;
      background-size: cover;
      min-height: 200px;
      position: relative;
      margin-bottom: -160px;
    }
  `;

  const MainHeaderContent = styled.div`
    width: ${state.theme.screenSizes.container};
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    margin: auto;
    img {
      height: 350px;
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      overflow: hidden;
      background-color: ${state.theme.colors.softYellow};

      img {
        max-height: 200px;
      }
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: 100%;
      padding: 0;
      grid-template-columns: 1fr;
      div:last-child {
        width: initial;
        img {
          display: none;
        }
      }
    }
  `;

  const DescriptionContent = styled.div`
    width: ${state.theme.screenSizes.container};
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin: 100px auto;

    div:first-of-type::after {
      content: "";
      background: ${state.theme.colors.yellow};
      width: 100%;
      display: block;
      height: 100%;
      position: absolute;
      top: 1rem;
      z-index: -1;
      border-radius: 5px;
      transform: rotate(2deg);
    }

    img {
      width: 100%;
      display: block;
      transform: rotate(-1deg);
      border-radius: 8px;
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      grid-template-columns: 1fr;
      width: auto;
      padding: 20px;
      margin: 0;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      grid-template-columns: 1fr;
      width: auto;
      padding: 20px;
      margin: 0;
    }
  `;

  const InfoButtons = styled.div`
    width: ${state.theme.screenSizes.container};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: auto;

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      grid-template-columns: 1fr;
      width: auto;
      padding: 20px;
      margin: 0;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      grid-template-columns: 1fr;
      width: auto;
      padding: 20px;
      margin: 0;
    }
  `;

  const keys = Object.keys(posts);

  let stickyPosts = [];

  const getStickyPosts = () => {
    keys.map((id) => {
      if (posts[id].sticky) {
        stickyPosts.push(posts[id]);
      }
    });

    stickyPosts.sort(function (a, b) {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
  };

  getStickyPosts();

  return (
    <>
      <MainHeader>
        <MainHeaderContent>
          <div>
            <h2>{renderText(stickyPosts[0].title.rendered)}</h2>
            <div
              css={css`
                font-family: "Noticia Text";
              `}
              dangerouslySetInnerHTML={{
                __html: stickyPosts[0].excerpt.rendered,
              }}
            />
            <Link href={stickyPosts[0].link} type="button">
              ¡Cuéntame más!
            </Link>
          </div>
          <div>
            <img src={bikeImage} />
          </div>
        </MainHeaderContent>
      </MainHeader>
      <MainHeaderBackground />
      <Items>
        {keys.slice(0, 3).map((id) => {
          return (
            <Link href={posts[id].link} key={id}>
              <h2>{renderText(posts[id].title.rendered)}</h2>
              <date>Escrito el {formatDate(posts[id].date)}</date>
              <div
                dangerouslySetInnerHTML={{
                  __html: posts[id].excerpt.rendered,
                }}
              />
            </Link>
          );
        })}
        <div
          css={css`
            background: #ffe607;
            width: 160px;
            text-transform: uppercase;
            font-size: 13px;
            text-align: center;
            font-weight: 600;
            padding: 5px 0;
            position: relative;
            max-height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            :hover {
              background: ${state.theme.colors.darkYellow};
            }
          `}
        >
          <Link href="/blog/">Ver más entradas</Link>
        </div>
      </Items>
      <Separator />
      <DescriptionContent>
        <div
          css={css`
            position: relative;
          `}
        >
          <img src={groupImage} />
        </div>
        <div>
          <h2>Asociación Recíclate YA</h2>
          <p>
            Somos una asociación <strong>sin ánimo de lucro</strong> que trata
            de mejorar la movilidad de nuestro entorno mediante el uso de la{" "}
            <strong>movilidad sostenible</strong>. Mantenemos en uso bicicletas
            que nos ceden, las ponemos a punto y se las prestamos a la gente: lo
            llamamos <strong>Bicicleteca</strong>; una "biblioteca" de bicis.
          </p>
        </div>
      </DescriptionContent>
      <Separator position="right" icon="walker" />
      <InfoButtons>
        <Link href="/como-formar-parte/" type="button-rounded">
          ¿Cómo puedo formar parte?
        </Link>
        <Link href="/como-colaborar/" type="button-rounded">
          ¿Cómo puedo colaborar?
        </Link>
        <Link href="/actividades/" type="button-rounded">
          Actividades que realizamos
        </Link>
      </InfoButtons>
      <Footer />
    </>
  );
};

export default connect(Home);
