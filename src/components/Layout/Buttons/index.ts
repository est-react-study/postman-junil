import { SerializedStyles } from "@emotion/core";
import {MouseEventHandler} from "react";

export interface IButtonProps {
  type: 'button'|'reset'|'submit'
  value: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  overrideCss?: SerializedStyles
}

export { DefaultButton } from './DefaultButton';