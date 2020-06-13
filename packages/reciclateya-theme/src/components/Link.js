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
          transition: ${state.theme.effects.transition};

          :hover {
            transform: scale(115%) rotate(-5deg);
            background: ${state.theme.colors.darkYellow};
          }
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
          transition: ${state.theme.effects.transition};

          :hover {
            transform: scale(105%) rotate(-2deg);
            background: ${state.theme.colors.darkYellow};
          }
        `;
      default:
        return styled.a`
          color: ${state.theme.colors.dark};
          text-decoration: none;
          font-family: "Barlow";

          :hover {
            h2 {
              text-decoration: underline;
              text-decoration-color: ${state.theme.colors.yellow};
              text-decoration-thickness: 3px;
            }

            p {
              text-decoration: underline;
            }
          }
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
