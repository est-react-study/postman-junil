import React from "react";
import {SerializedStyles} from "@emotion/core";

export { Alert } from './Alert';
export { Dialog } from './Dialog';

export interface IDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  overrideCss?: SerializedStyles
  width?: number
  opened?: boolean
  onClose: () => void
}

export interface IAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void
}
