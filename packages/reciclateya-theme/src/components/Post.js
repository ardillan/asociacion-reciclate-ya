import React from "react";
import { connect, styled } from "frontity";

const Post = ({ state, libraries }) => {
  const Container = styled.div`
    margin: auto;
    width: ${state.theme.screenSizes.desktop};
  `;

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
