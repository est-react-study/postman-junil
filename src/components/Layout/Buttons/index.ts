import React from "react";
import {SerializedStyles} from "@emotion/core";

export { DefaultButton } from './DefaultButton';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  overrideCss?: SerializedStyles
}
