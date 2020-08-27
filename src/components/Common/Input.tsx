/** @jsx jsx **/
import {css, jsx, SerializedStyles} from "@emotion/core";
import React from "react";

const defaultInputStyles = `
  padding: 10px;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #bbb;
  font-size: 13px;
  box-sizing: border-box;
  
  + input,
  + button,
  + select {
    margin-left: 5px;
  }
  
  &:focus {
    outline: none;
  }
`;

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  overrideCss?: SerializedStyles
}

export const Input: React.FC<IInputProps> = ({ overrideCss, ...props }: IInputProps) => {
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