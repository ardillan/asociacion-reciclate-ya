import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import { renderText } from "../utils/helpers";
import waveImage from "../../assets/images/background-wave.svg";
import mainHeaderImage from "../../assets/images/background-main-header.svg";
import bikeImage from "../../assets/images/home_cover.png";

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
    z-index: -500;
    background-position: center;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
        display: none;
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
              <div
                dangerouslySetInnerHTML={{
                  __html: posts[id].excerpt.rendered,
                }}
              />
            </Link>
          );
        })}
      </Items>
    </>
  );
};

export default connect(Home);
