import React from "react";
import { connect, styled } from "frontity";

const Container = ({ state, children, styles }) => {
  const Container = styled.div`
    ${styles ? styles : ""};
    width: ${state.theme.screenSizes.container};
    margin: auto;
    display: grid;

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      grid-template-columns: 1fr;
      padding: 20px;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;
      padding: 20px;
    }
  `;

  return <Container>{children}</Container>;
};

export default connect(Container);
