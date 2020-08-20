/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import { Dialog } from "./Dialog";
import {DefaultButton} from "../Buttons";
import {IAlertProps} from "./index";

export const Alert: React.FC<IAlertProps> = ({ children, onClose }: IAlertProps) => {
  return (
    <Dialog width={300} onClose={onClose}>
      { children }
      <div css={css`
        margin-top: 10px;
        text-align: right;
      `}>
        <DefaultButton onClick={() => onClose()}>
          확인
        </DefaultButton>
      </div>
    </Dialog>
  );
}