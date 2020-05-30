import React from "react";
import { connect, styled } from "frontity";
import Link from "./components/Link";

const Home = ({ state, posts }) => {
  const keys = Object.keys(posts);

  return (
    <Container>
      <MainHeader></MainHeader>
      <Items>
        {keys.slice(0, 3).map((id) => {
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

export default connect(Home);

const MainHeader = styled.div`
  height: 300px;
  background: pink;
  margin: 0;
`;

const Items = styled.div`
  & > div {
    margin: 16px 0;
    font-size: 1.2em;
    color: lime;
  }
`;

const Container = styled.div`
  margin: 20px;
`;
