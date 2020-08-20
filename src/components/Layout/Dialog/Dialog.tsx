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
    margin: 100px auto 0;
    padding: 30px;
    border-radius: 3px;
    
    position: relative;
  }
`;

const closeButtonStyles = css`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  cursor: pointer;
  background-color: #666;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  transition: background-color 0.3s;
  
  &:hover, &:focus {
    background-color: #000;
    outline: none;
  }
`;

export const Dialog: React.FC<IDialogProps> = ({ children, overrideCss, width = 700 }: IDialogProps) => {

  const dialogStyles = css`
    ${defaultDialogStyles}
    ${overrideCss}
  `;

  const wrapperStyles = css`
    width: ${width}px;
  `;

  return (
    <div css={dialogStyles}>
      <div css={wrapperStyles}>
        <button css={closeButtonStyles}>×</button>
        { children }
      </div>
    </div>
  );
}