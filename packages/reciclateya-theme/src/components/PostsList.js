import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import { renderText, formatDate } from "../utils/helpers";
import bikeImage from "../../assets/images/home_cover.png";

const PostsList = ({ state, libraries }) => {
  const fetchPosts = libraries.source.api.get({ endpoint: "posts" });
  fetchPosts.then((response) => {
    libraries.source.populate({ response, state });
  });

  const posts = Object.values(state.source.post).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const Html2React = libraries.html2react.Component;

  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

    img {
      width: 100%;
      object-fit: contain;
      max-height: 300px;
    }

    div:first-of-type {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;

      h1 {
        margin: 0;
      }
    }

    div:last-child {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-content: center;
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      grid-template-columns: 1fr;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;
    }
  `;

  const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 55px;
    h2 {
      font-size: 30px;
      font-weight: 400;
      margin: 0;
      color: ;
      text-decoration: underline;
      text-decoration-color: ${state.theme.colors.yellow};
      text-decoration-thickness: 3px;
    }

    date {
      font-size: 14px;
    }

    p {
      font-size: 18px;
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      grid-template-columns: 1fr;
      padding: 20px;

      h2 {
        font-size: 23px;
        font-weight: 600;
      }
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;
      padding: 20px;
      h2 {
        font-size: 23px;
        font-weight: 600;
      }
    }
  `;

  return (
    <>
      <PostHeader>
        <div>
          <h1>¡Nuestro blog!</h1>
          <p>
            A continuación se muestra un listado con todas nuestras entradas.
          </p>
        </div>
        <div>
          <img src={bikeImage} />
        </div>
      </PostHeader>
      <Items>
        {posts.map((post) => {
          return (
            <Link href={post.link} key={post.id}>
              <h2>
                {renderText(post.title.rendered)} {post.id}
              </h2>
              <date>Escrito el {formatDate(post.date)}</date>
              <Html2React html={post.excerpt.rendered} />
            </Link>
          );
        })}
      </Items>
    </>
  );
};

export default connect(PostsList);
