import React from "react";
import { connect, styled, css } from "frontity";
import bikeIcon from "../../../assets/images/icon-bike.png";
import walkerIcon from "../../../assets/images/icon-walker.png";

const Separator = ({ state, position = "left", icon = "bike" }) => {
  let height = "16px";
  let halfheight = `calc(${height}/2)`;
  let thickness = "110%";

  let offset = "4px";
  let backgroundcolor = "#FFFFFF";
  let linecolor = `${state.theme.colors.yellow}`;

  const LineContainer = styled.div`
    display: flex;
    margin: 50px 0;
    flex-direction: ${position === "left" ? "row" : "row-reverse"};
  `;

  const Line = styled.div`
    width: 25vw;
    margin: 40px 0;
    background: ${backgroundcolor};
    position: relative;
    height: ${height};
    z-index: 1;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
    }
    &:before {
      height: calc(${height} - ${offset});
      top: ${thickness};
      background: linear-gradient(
            -135deg,
            ${linecolor} ${halfheight},
            transparent 0
          )
          0 ${halfheight},
        linear-gradient(135deg, ${linecolor} ${halfheight}, transparent 0) 0
          ${halfheight};
      background-position: top ${position === "left" ? "left" : "right"};
      background-repeat: repeat-x;
      background-size: ${height} ${height};
      position: absolute;
      ${position === "left" ? "left: calc(-50vw);" : "right: calc(-50vw);"}
    }
    &:after {
      height: ${height};
      top: 100%;
      background: linear-gradient(
            -135deg,
            ${backgroundcolor} ${halfheight},
            transparent 0
          )
          0 ${halfheight},
        linear-gradient(135deg, ${backgroundcolor} ${halfheight}, transparent 0)
          0 ${halfheight};
      background-position: top ${position === "left" ? "left" : "right"};
      background-repeat: repeat-x;
      background-size: ${height} ${height};
      position: absolute;
      ${position === "left" ? "left: calc(-50vw);" : "right: calc(-50vw);"}
    }
  `;

  return (
    <LineContainer>
      <Line />
      <img
        src={icon === "bike" ? bikeIcon : walkerIcon}
        css={css`
          width: 45px;
          height: 45px;
          margin-top: 45px;
          margin-left: 5px;
        `}
      />
    </LineContainer>
  );
};

export default connect(Separator);
