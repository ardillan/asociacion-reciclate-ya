import React from "react";
import { connect, styled } from "frontity";
import Link from "./components/Link";

const Home = ({ state, posts }) => {
  const keys = Object.keys(posts);

  let stickyPosts = [];

  const getStickyPosts = () => {
    keys.map((id) => {
      if (posts[id].sticky) {
        stickyPosts.push(posts[id]);
      }
    });

    stickyPosts.sort(function (a, b) {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
  };

  getStickyPosts();

  return (
    <>
      <MainHeader>
        <Link href={stickyPosts[0].link} color="initial">
          <h2>{stickyPosts[0].title.rendered}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: stickyPosts[0].excerpt.rendered,
            }}
          />
        </Link>
      </MainHeader>
      <Items>
        {keys.slice(0, 3).map((id) => {
          console.log();
          return (
            <Link href={posts[id].link} color="initial" key={id}>
              <h2>{posts[id].title.rendered}</h2>
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

  h2 {
    font-size: 25px;
    font-weight: 400;
  }

  div {
    flex-grow: 1;
    flex-basis: 0;
  }

  p {
    font-size: 1rem;
    font-family: "Noticia Text";
  }
`;
