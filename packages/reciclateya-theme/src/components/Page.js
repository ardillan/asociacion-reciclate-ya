import React from "react";
import { connect, styled, css } from "frontity";
import Container from "./structure/Container";
import Footer from "./Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import Separator from "../components/structure/Separator";
import bikeImage from "../../assets/images/home_cover.png";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    margin-bottom: -60px;

    img {
      max-width: 100%;
      width: auto;
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

  const PostContainer = styled.article`
    width: ${state.theme.screenSizes.pageContainer};
    margin: auto;

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
    }
  `;

  const PostContent = styled.div`
    img {
      max-width: 100%;
    }

    .coblocks-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      list-style-type: none;
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
          .coblocks-gallery {
            grid-template-columns:  1fr;
          }
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      .coblocks-gallery {
        grid-template-columns:  1fr;
      }
  `;
  return (
    <>
      <Container>
        <PostContainer>
          <BreadCrumbs
            data={[
              { link: "/", text: "Inicio" },
              {
                link: `${post.link}`,
                text: `${post.title.rendered}`,
              },
            ]}
          />
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
          <PostContent>
            <Html2React html={post.content.rendered} />
          </PostContent>
          <Separator position="right" icon="walker" />
        </PostContainer>
      </Container>

      <Footer />
    </>
  );
};

export default connect(Post);
