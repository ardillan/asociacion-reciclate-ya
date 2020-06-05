import React from "react";
import { connect } from "frontity";
import Container from "./structure/Container";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
      <Html2React html={post.content.rendered} />
    </Container>
  );
};

export default connect(Post);
