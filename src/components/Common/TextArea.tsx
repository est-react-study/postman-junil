/** @jsx jsx **/
import {css, jsx, SerializedStyles} from "@emotion/core";
import React from "react";

const getStyles = (override?: SerializedStyles, width?: string, height?: string) => css`
  ${override}
  padding: 10px;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #bbb;
  font-size: 13px;
  box-sizing: border-box;
  width: ${width || '100%'};
  height: ${height || '100%'};
  
  &:focus {
    outline: none;
  }
`;

export interface IInputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  overrideCss?: SerializedStyles
  width?: string
  height?: string
}

export const TextArea: React.FC<IInputProps> = ({ overrideCss, width, height, ...props }: IInputProps) => {
  const sendProps = {
    cols: 80,
    rows: 10,
    ...props,
    css: getStyles(overrideCss, width, height),
  }
  return (
    <textarea{ ...sendProps } />
  );
}