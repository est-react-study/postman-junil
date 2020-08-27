import React from "react";
import {SerializedStyles} from "@emotion/core";

export { DefaultInput } from './DefaultInput';


export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  overrideCss?: SerializedStyles
}