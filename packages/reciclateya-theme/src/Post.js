import React from "react";
import { connect, styled } from "frontity";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Container>
  );
};

export default connect(Post);

const Container = styled.div`
  margin: 20px;
`;
