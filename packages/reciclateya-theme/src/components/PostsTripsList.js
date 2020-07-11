import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import { renderText, formatDate } from "../utils/helpers";

const PostsList = ({ state, libraries, category }) => {
  const fetchPosts = libraries.source.api.get({ endpoint: "posts" });
  fetchPosts.then((response) => {
    libraries.source.populate({ response, state });
  });

  const posts = Object.values(state.source.post).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const trips = state.source.get("/category/salidas/");

  const Html2React = libraries.html2react.Component;

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
      <Items>
        {posts.map((post) => {
          if (post.categories.includes(trips.id)) {
            return (
              <Link href={post.link} key={post.id}>
                <h2>{renderText(post.title.rendered)}</h2>
                <time>Escrito el {formatDate(post.date)}</time>
                <Html2React html={post.excerpt.rendered} />
              </Link>
            );
          }
        })}
      </Items>
    </>
  );
};

export default connect(PostsList);
