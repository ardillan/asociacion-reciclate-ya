import React from "react";
import { connect, styled } from "frontity";
import Link from "./components/Link";

const Home = ({ state, posts }) => {
  const keys = Object.keys(posts);

  return (
    <>
      <MainHeader></MainHeader>
      <Items>
        {keys.slice(0, 3).map((id) => {
          return (
            <Link href={posts[id].link} color="initial" key={id}>
              {posts[id].title.rendered}
              <div
                dangerouslySetInnerHTML={{
                  __html: posts[id].excerpt.rendered,
                }}
              />
            </Link>
          );
        })}
      </Items>
    </>
  );
};

export default connect(Home);

const MainHeader = styled.div`
  height: 300px;
  background: pink;
  margin: 0;
`;

const Items = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  padding: 20px;
  column-gap: 20px;

  div {
    flex-grow: 1;
    flex-basis: 0;
  }

  p {
    font-size: 1rem;
    font-family: "Noticia Text";
  }
`;
