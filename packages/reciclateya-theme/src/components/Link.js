import React from "react";
import { connect, styled } from "frontity";

const Link = ({ href, actions, children, color }) => {
  const AnchorColor = color === "initial" ? "initial" : "orange";

  const Anchor = styled.a`
    color: ${AnchorColor};
    text-decoration: none;
    font-family: "Barlow";
  `;

  return (
    <>
      <Anchor
        href={href}
        onClick={(event) => {
          event.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </Anchor>
    </>
  );
};

export default connect(Link);
