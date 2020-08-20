/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";

const dialogStyles = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: fade-out(#000, 0.5);
  z-index: 100;
  
  > div {
    background-color: #fff;
  }
`;

export const Dialog: React.FC = (props) => {
  return (
    <div css={dialogStyles}>
      <div>
        { props.children }
      </div>
    </div>
  );
}