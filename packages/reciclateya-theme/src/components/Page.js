import React from "react";
import { connect, styled, css } from "frontity";
import Container from "./structure/Container";
import Footer from "./Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import bikeImage from "../../assets/images/home_cover.png";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

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
  `;

  return (
    <>
      <Container>
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
            <img
              src={bikeImage}
              css={css`
                max-height: 280px;
              `}
            />
          </div>
        </PostHeader>

        <Html2React html={post.content.rendered} />
      </Container>
      <Footer />
    </>
  );
};

export default connect(Post);
