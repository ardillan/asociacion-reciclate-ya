import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const Blog = ({ state }) => {
  const keys = Object.keys(state.posts);
  const posts = state.posts;

  return (
    <Items>
      <h1>Blog</h1>
      {keys.map((id) => {
        return (
          <Link href={posts[id].link} key={id}>
            {posts[id].title.rendered}
          </Link>
        );
      })}
    </Items>
  );
};

export default connect(Blog);

const Items = styled.div`
  & > div {
    margin: 16px 0;
    font-size: 1.2em;
  }
`;
