/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React, { ReactNode } from "react";
import ReactDOM from 'react-dom';
import { Dialog } from "./Dialog";
import { Button} from "./Button";

const alertDom = document.createElement('div');

export interface IAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void
}

export const Alert: React.FC<IAlertProps> = ({ children, onClose }: IAlertProps) => {
  return (
    <Dialog width={300} onClose={onClose}>
      { children }
      <div css={css`
        margin-top: 10px;
        text-align: right;
      `}>
        <Button onClick={() => onClose()}>
          확인
        </Button>
      </div>
    </Dialog>
  );
}

export const open = (message: string) => {
  document.body.appendChild(alertDom);
  const close = () => alertDom.remove();
  ReactDOM.render(
    <Alert onClose={close}>
      {message}
    </Alert>,
    alertDom
  );
}