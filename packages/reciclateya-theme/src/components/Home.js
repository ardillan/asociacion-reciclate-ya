import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import { renderText } from "../utils/helpers";

const Home = ({ state, posts }) => {
  const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    grid-gap: 2rem;
    margin-top: 20px;
    align-items: space-around;
    padding: 20px;
    width: ${state.theme.screenSizes.desktop};
    margin: auto;
    h2 {
      font-size: 25px;
      font-weight: 600;
    }

    div {
    }

    p {
      font-size: 1rem;
      font-family: "Noticia Text";
    }

    @media (max-width: ${state.theme.screenSizes.desktop}) {
      width: auto;
      grid-template-columns: 1fr;
    }
  `;

  const MainHeader = styled.div`
    min-height: 300px;
    background: pink;
    margin: 0;
    padding: 20px;
    display: flex;
    align-items: center;

    p,
    h2 {
      margin: 0;
    }
  `;

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

  const Container = styled.div`
    width: ${state.theme.screenSizes.desktop};
    margin: auto;
  `;

  return (
    <>
      <MainHeader>
        <Container>
          <Link href={stickyPosts[0].link} color="initial">
            <div
              css={css`
                width: 450px;
              `}
            >
              <h2>{renderText(stickyPosts[0].title.rendered)}</h2>
              <div
                css={css`
                  font-family: "Noticia Text";
                `}
                dangerouslySetInnerHTML={{
                  __html: stickyPosts[0].excerpt.rendered,
                }}
              />
            </div>
          </Link>
        </Container>
      </MainHeader>
      <Items>
        {keys.slice(0, 3).map((id) => {
          return (
            <Link href={posts[id].link} color="initial" key={id}>
              <h2>{renderText(posts[id].title.rendered)}</h2>
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
