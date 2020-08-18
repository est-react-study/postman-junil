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

export const DefaultButton: React.FC<IButtonProps> = (props: IButtonProps) => {
  const extendedStyles = css`
    ${defaultButtonStyles}
    ${props.overrideCss}
  `;
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      css={extendedStyles}
    >
      {props.value}
    </button>
  );
}