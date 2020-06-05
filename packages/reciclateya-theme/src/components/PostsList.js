import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";
import { renderText } from "../utils/helpers";

const PostsList = ({ state, libraries }) => {
  const fetchPosts = libraries.source.api.get({ endpoint: "posts" });
  fetchPosts.then((response) => {
    libraries.source.populate({ response, state });
  });

  const keys = Object.keys(state.source.post);
  const posts = state.source.post;

  return (
    <>
      <Items>
        {keys.map((id) => {
          return (
            <Link href={posts[id].link} key={id}>
              {renderText(posts[id].title.rendered)}
            </Link>
          );
        })}
      </Items>
    </>
  );
};

export default connect(PostsList);

const Items = styled.div`
  & > div {
    margin: 16px 0;
    font-size: 1.2em;
  }
`;
