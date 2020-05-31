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
    <div>
      <Anchor
        href={href}
        onClick={(event) => {
          event.preventDefault();
          actions.router.set(href);
          actions.theme.closeMenu();
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);
