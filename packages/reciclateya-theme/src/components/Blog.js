import React from "react";
import { connect, styled } from "frontity";

import PostsList from "./PostsList";
import Container from "./structure/Container";

const Blog = ({ state }) => {
  return (
    <Container>
      <h1>Página de entradas</h1>
      <PostsList />
    </Container>
  );
};

export default connect(Blog);
