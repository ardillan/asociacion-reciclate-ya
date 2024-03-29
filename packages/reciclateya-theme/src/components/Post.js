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
      object-position: top;
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
        height: auto;
        width: 100%;
        border-radius: 5px;
        object-fit: contain;
      }
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;
      img {
        height: auto;
        width: 100%;
        border-radius: 5px;
        object-fit: contain;
      }
    }
  `;
  const PageContainer = styled.article`
    width: ${state.theme.screenSizes.pageContainer};
    margin: auto;

    img {
      max-width: 100%;
      border: 1px solid #f0f0f0;
      height: auto;
      box-shadow: 0 14px 28px rgb(212, 218, 234),
        0 10px 10px rgba(206, 206, 206, 0.22);
    }
    .wp-block-coblocks-gallery-collage {
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      figure {
        margin: 0;
        padding: 0;
      }

      img {
        width: 100%;
        margin-bottom: 30px;
      }
    }

    a {
      word-break: break-all;
      background: #fff9d2;
      color: initial;
    }

    blockquote {
      background: color(srgb 1 0.8979 0.03 / 0.23);
      border-left: 10px solid color(srgb 1 0.9024 0.0244);
      padding: 20px 20px 40px 40px;
      margin: 0px 0px 2rem 0px;
      width: auto;
      max-width: 100%;

      cite {
        font-size: 16px;
        font-weight: 600;
        color: #484759;
      }
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: 100%;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: 100%;
        figure {
          margin: 0;
          padding: 0;
        }

      }
    }
  `;
  return (
    <>
      <Container>
        <PageContainer>
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
          <PostHeader>
            <div>
              <PostFeaturedMedia id={post.featured_media} />
            </div>
            <div>
              <h1>
                <Html2React html={post.title.rendered} />
              </h1>
              <time
                css={css`
                  font-size: 16px;
                  padding: 20px 0;
                `}
              >
                Escrito el {formatDate(post.date)}
              </time>
              <Html2React html={post.excerpt.rendered} />
            </div>
          </PostHeader>
        </PageContainer>
      </Container>
      <Separator />
      <Container>
        <PageContainer>
          <Html2React html={renderText(post.content.rendered)} />
        </PageContainer>
      </Container>
      <Separator position="right" icon="walker" />

      <Footer />
    </>
  );
};

export default connect(Post);
