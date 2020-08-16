import { css } from "@emotion/core";

export const addressStyle = css`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
`;

const commonInputStyle = css`
  border: 1px solid #bbb;
  background: #f5f5f5;
  border-radius: 2px;
  font-size: 13px;
  height: 36px;
  padding: 0 10px;
  box-sizing: border-box;
  
  &:focus {
    background: #fff;
    outline: none;
  }
`;

export const selectStyle = css`
  ${commonInputStyle}
  border-radius: 3px 0 0 3px;
  width: 100px;
`;

export const addressInputStyle = css`
  ${commonInputStyle}
  border-radius: 0 3px 3px 0;
  margin-left: -1px;
  width: calc(100% - 190px);
`;

export const buttonStyle = css`
  margin-left: 5px;
  width: 85px;
  border: none;
  background: #09F;
  color: #fff;
  font-weight: bold;
  height: 36px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 2px;
`;