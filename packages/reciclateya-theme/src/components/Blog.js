import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";
import PostsList from "./PostsList";

const Blog = ({ state }) => {
  return (
    <Container>
      <h1>Página de entradas</h1>
      <PostsList />
    </Container>
  );
};

export default connect(Blog);

const Container = styled.div`
  margin: 20px;
`;
