/** @jsx jsx **/
import { jsx, css } from "@emotion/core";
import React from "react";
import { IButtonProps } from "./index";

const defaultButtonStyles = css`
  border: none;
  border-radius: 2px;
  background: #09F;
  color: #fff;
  padding: 7px 10px;
  transition: background-color 0.15s;
  
  &:hover {
    background: #06F;
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