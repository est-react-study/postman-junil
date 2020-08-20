/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import {IDialogProps} from "./index";

const defaultDialogStyles = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  
  > div {
    background-color: #fff;
    margin: 0 auto;
  }
`;

export const Dialog: React.FC<IDialogProps> = ({ children, overrideCss, wrapperCss }: IDialogProps) => {

  const dialogStyles = css`
    ${defaultDialogStyles}
    ${overrideCss}
  `;

  return (
    <div css={dialogStyles}>
      <div css={wrapperCss}>
        { children }
      </div>
    </div>
  );
}