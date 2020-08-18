import { SerializedStyles } from "@emotion/core";
import React from "react";

export interface IButtonProps extends  React.HTMLAttributes<HTMLButtonElement> {
  overrideCss?: SerializedStyles
}

export { DefaultButton } from './DefaultButton';