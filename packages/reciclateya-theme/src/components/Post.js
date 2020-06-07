import React from "react";
import { connect } from "frontity";
import Container from "./structure/Container";
import BreadCrumbs from "../components/BreadCrumbs";
import { renderText } from "../utils/helpers";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
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
      <Html2React html={renderText(post.content.rendered)} />
    </Container>
  );
};

export default connect(Post);
