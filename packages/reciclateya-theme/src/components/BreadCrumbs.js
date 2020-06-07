import React from "react";
import { styled, css } from "frontity";
import Link from "../components/Link";

const BreadCrumbs = ({ data }) => {
  const BreadCrumbsContainer = styled.div`
    font-family: "Barlow";
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 25px;
    span:last-child {
      font-weight: 600;
    }
  `;

  return (
    <BreadCrumbsContainer>
      {data.map((value) => (
        <span>
          <Link href={`${value.link}`}>{value.text}</Link>
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

export default BreadCrumbs;
