/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import { IInputProps } from "./index";

const defaultInputStyles = `
  padding: 10px;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #bbb;
  font-size: 13px;
  
  + input,
  + button,
  + select {
    margin-left: 5px;
  }
  
  &:focus {
    outline: none;
  }
`;

export const DefaultInput: React.FC<IInputProps> = ({ overrideCss, ...props }: IInputProps) => {
  return (
    <input
      {...props}
      css={css`
        ${defaultInputStyles}
        ${overrideCss}
      `}
    />
  );
}