import React from "react";
import { connect, styled } from "frontity";

import PostsTripsList from "./PostsTripsList";
import BreadCrumbs from "../components/BreadCrumbs";
import Container from "./structure/Container";
import Footer from "./Footer";

import Separator from "../components/structure/Separator";
import bikeImage from "../../assets/images/home_cover.png";

const BikeTrips = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const BikeTripsContainer = styled.article`
    width: ${state.theme.screenSizes.pageContainer};
    margin: auto;

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      grid-template-columns: 1fr;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;
    }
  `;

  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    margin-bottom: -60px;

    img {
      max-width: 100%;
      width: auto;
      object-fit: contain;
      max-height: 300px;
    }
    div:first-of-type {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;

      h1 {
        margin: 0;
      }
    }

    div:last-child {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-content: center;
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      grid-template-columns: 1fr 1fr;

      img {
        max-width: 100%;
        width: auto;
      }
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      grid-template-columns: 1fr;
      img {
        max-width: 100%;
        width: auto;
      }
    }
  `;
  return (
    <>
      <Container>
        <BikeTripsContainer>
          <BreadCrumbs
            data={[
              { link: "/", text: "Inicio" },
              { link: "/salidas/", text: "Salidas" },
            ]}
          />{" "}
          <PostHeader>
            <div>
              <h1>
                <Html2React html={post.title.rendered} />
              </h1>
              <Html2React html={post.excerpt.rendered} />
            </div>
            <div>
              <img src={bikeImage} />
            </div>
          </PostHeader>
          <Separator />
          <PostsTripsList />
        </BikeTripsContainer>
      </Container>

      <Footer />
    </>
  );
};

export default connect(BikeTrips);
