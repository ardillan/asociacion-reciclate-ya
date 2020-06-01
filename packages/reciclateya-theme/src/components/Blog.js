import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const Blog = ({ state, posts }) => {
  const keys = Object.keys(posts);

  return (
    <Container>
      <Items>
        {keys.map((id) => {
          return (
            <Link href={posts[id].link} key={id}>
              {posts[id].title.rendered}
            </Link>
          );
        })}
      </Items>
    </Container>
  );
};

export default connect(Blog);

const Items = styled.div`
  & > div {
    margin: 16px 0;
    font-size: 1.2em;
  }
`;

const Container = styled.div`
  margin: 20px;
`;
