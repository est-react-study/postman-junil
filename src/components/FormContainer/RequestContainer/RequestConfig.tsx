/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const tabs = ['Params', 'Headers', 'Body'];

const tabStyle = css`

`;

export const RequestConfig: React.FC = () => {
  return (
    <div>
      <ul css={tabStyle}>
        { tabs.map((v, k) =>
          <li key={k}>{v}</li>
        )}
      </ul>
    </div>
  )
}