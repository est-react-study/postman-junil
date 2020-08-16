/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";

const titleStyle = css`
  border-bottom: 2px solid #06F;
  padding: 15px;
  margin: 0;
  font-size: 21px;
  font-weight: 400;
`;

export const Histories: React.FC = () => (
  <section>
    <h2 css={titleStyle}>History</h2>
  </section>
);