import React from "react";
import { connect } from "frontity";

import PostsList from "./PostsList";
import BreadCrumbs from "../components/BreadCrumbs";
import Container from "./structure/Container";
import Footer from "./Footer";
const Blog = ({ state }) => {
  return (
    <>
      <Container>
        <BreadCrumbs
          data={[
            { link: "/", text: "Inicio" },
            { link: "/blog/", text: "Blog" },
          ]}
        />
        <PostsList />
      </Container>
      <Footer />
    </>
  );
};

export default connect(Blog);
