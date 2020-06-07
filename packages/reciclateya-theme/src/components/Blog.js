import React from "react";
import { connect, styled } from "frontity";

import PostsList from "./PostsList";
import BreadCrumbs from "../components/BreadCrumbs";
import Container from "./structure/Container";
import Footer from "./Footer";
const Blog = ({ state }) => {
  const BlogContainer = styled.article`
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

  return (
    <>
      <Container>
        <BlogContainer>
          <BreadCrumbs
            data={[
              { link: "/", text: "Inicio" },
              { link: "/blog/", text: "Blog" },
            ]}
          />{" "}
          <PostsList />
        </BlogContainer>
      </Container>
      <Footer />
    </>
  );
};

export default connect(Blog);
