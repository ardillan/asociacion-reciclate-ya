import React from "react";
import { connect, styled } from "frontity";

const Container = ({ state, children }) => {
  const Container = styled.div`
    width: ${state.theme.screenSizes.desktop};
    margin: auto;
    display: grid;

    @media (max-width: ${state.theme.screenSizes.desktop}) {
      width: auto;
      grid-template-columns: 1fr;
      padding: 20px;

      img {
        width: 100%;
      }
    }
  `;

  return <Container>{children}</Container>;
};

export default connect(Container);
