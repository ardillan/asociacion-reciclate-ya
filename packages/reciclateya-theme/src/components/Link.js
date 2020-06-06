import React from "react";
import { connect, styled } from "frontity";

const Link = ({ state, href, actions, children, type }) => {
  const selectAnchorType = (type) => {
    switch (type) {
      case "button":
        return styled.a`
          color: ${state.theme.colors.dark};
          background: ${state.theme.colors.yellow};
          font-family: "Barlow";
          background: #ffe607;
          display: inline-block;
          margin-top: 10px;
          transform: rotate(-3deg);
          padding: 10px 25px;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
        `;

      case "button-rounded":
        return styled.a`
          color: ${state.theme.colors.dark};
          background: ${state.theme.colors.yellow};
          font-family: "Barlow";
          background: #ffe607;
          display: inline-block;
          padding: 10px 25px;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
        `;
      default:
        return styled.a`
          color: ${state.theme.colors.dark};
          text-decoration: none;
          font-family: "Barlow";
        `;
    }
  };

  const Anchor = selectAnchorType(type);

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
