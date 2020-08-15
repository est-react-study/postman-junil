import { css } from "@emotion/core";

export const addressStyle = css`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const commonInputStyle = css`
  border: 1px solid #bbb;
  background: #f5f5f5;
  border-radius: 3px;
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
  width: calc(100% - 100px);
`;