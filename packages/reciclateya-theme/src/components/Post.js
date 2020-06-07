import React from "react";
import { connect, styled, css } from "frontity";
import Container from "./structure/Container";
import BreadCrumbs from "../components/BreadCrumbs";
import PostFeaturedMedia from "../components/FeaturedMedia";
import Footer from "../components/Footer";
import Separator from "./structure/Separator";
import { renderText, formatDate } from "../utils/helpers";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: 35% 65%;
    grid-gap: 50px;
    margin-top: 40px;

    img {
      height: 280px;
      width: 280px;
      border-radius: 5px;
      object-fit: cover;
    }

    div:first-of-type {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }

    div:last-child {
      padding: 10px;
      display: flex;
      flex-direction: column;
      h1,
      p {
        margin: 0;
      }
      h1 {
        font-size: 45px;
      }
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      grid-template-columns: 1fr;

      img {
        width: 100%;
      }
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;

      img {
        width: 100%;
      }
    }
  `;
  const PageContainer = styled.article`
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
  return (
    <>
      <Container>
        <BreadCrumbs
          data={[
            { link: "/", text: "Inicio" },
            { link: "/blog/", text: "Blog" },
            {
              link: `${post.link}`,
              text: `${renderText(post.title.rendered)}`,
            },
          ]}
        />
        <PageContainer>
          <PostHeader>
            <div>
              <PostFeaturedMedia id={post.featured_media} />
            </div>
            <div>
              <h1>
                <Html2React html={post.title.rendered} />
              </h1>
              <date
                css={css`
                  font-size: 16px;
                  padding: 20px 0;
                `}
              >
                Escrito el {formatDate(post.date)}
              </date>
              <Html2React html={post.excerpt.rendered} />
            </div>
          </PostHeader>
          <Separator />
          <Html2React html={renderText(post.content.rendered)} />
          <Separator position="right" icon="walker" />
        </PageContainer>
      </Container>

      <Footer />
    </>
  );
};

export default connect(Post);
