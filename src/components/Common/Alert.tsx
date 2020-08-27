/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import { Dialog } from "./Dialog";
import { Button} from "./Button";

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