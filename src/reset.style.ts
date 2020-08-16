import { css } from "@emotion/core";

export const listResetStyle = css`
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const paragraphResetStyle = css`
  p {
    margin: 0;
    padding: 0;
  }
`;

export const allResetStyle = css`
  ${listResetStyle}
  ${paragraphResetStyle}
`;