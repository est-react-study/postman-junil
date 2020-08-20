import React from "react";
import { Dialog } from "./Dialog";
import {css} from "@emotion/core";

const wrapperCss = css`
  width: 500px;
  margin-top: 100px;
`;

export const Alert: React.FC = (props) => {
  return (
    <Dialog wrapperCss={wrapperCss}>
      { props.children }
    </Dialog>
  );
}