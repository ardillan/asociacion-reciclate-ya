import React from "react";
import { styled, css, connect } from "frontity";
import Link from "../components/Link";

const BreadCrumbs = ({ state, data }) => {
  const BreadCrumbsContainer = styled.div`
    font-family: "Barlow";
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 25px;
    span:last-child {
      font-weight: 600;
    }

    span > a {
      background: white;
      word-break: break-all;
      color: initial;
      &:hover {
        text-decoration: underline;
      }
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      margin: 15px 0;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      margin: 15px 0;
    }
  `;

  return (
    <BreadCrumbsContainer>
      {data.map((value, key) => (
        <span key={key}>
          <Link className="item" href={`${value.link}`}>
            {value.text}
          </Link>
          <span
            css={css`
              color: #ffe607;
              padding: 0 5px;
              font-weight: 400 !important;
            `}
          >
            /
          </span>
        </span>
      ))}
    </BreadCrumbsContainer>
  );
};

export default connect(BreadCrumbs);
