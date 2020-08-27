/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import {IDialogProps} from "./index";

export const Dialog: React.FC<IDialogProps> = ({ children, overrideCss, width = 700, onClose }: IDialogProps) => {

  const dialogStyles = css`
    ${defaultDialogStyles}
    ${overrideCss}
  `;

  const wrapperStyles = css`
    width: ${width}px;
  `;

  const close = () => onClose();

  return (
    <div css={dialogStyles} onClick={close}>
      <div css={wrapperStyles} onClick={e => e.stopPropagation()}>
        <button css={closeButtonStyles} onClick={close}>×</button>
        { children }
      </div>
    </div>
  );

}

const defaultDialogStyles = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  cursor: pointer;
  
  > div {
    background-color: #fff;
    margin: 100px auto 0;
    padding: 15px;
    border-radius: 3px;
    position: relative;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    cursor: default;
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
  width: 20px;
  height: 20px;
  border-radius: 3px;
  transition: background-color 0.3s;
  
  &:hover, &:focus {
    background-color: #000;
    outline: none;
  }
`;