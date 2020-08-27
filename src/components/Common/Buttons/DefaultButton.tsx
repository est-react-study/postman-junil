/** @jsx jsx **/
import { jsx, css } from "@emotion/core";
import React from "react";
import { IButtonProps } from "./index";

const defaultButtonStyles = css`
  border: none;
  border-radius: 2px;
  background-color: #09F;
  color: #fff;
  padding: 7px 10px;
  transition-property: background-color, opacity;
  transition-duration: 0.2s;
  box-sizing: border-box;
  
  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: #06F;
      outline: none;
    }
  }
  
  &:disabled {
    opacity: 0.5
  }
`;

export const DefaultButton: React.FC<IButtonProps> = ({ overrideCss, ...props }: IButtonProps) => {
  const extendedStyles = css`
    ${defaultButtonStyles}
    ${overrideCss}
  `;
  return (
    <button
      { ...props }
      css={extendedStyles}
    >
      {props.children}
    </button>
  );
}