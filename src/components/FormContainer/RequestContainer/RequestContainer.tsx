/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React from "react";
import { Address } from "./Address";

const titleStyle = css`
  font-size: 21px;
  margin: 0;
  padding: 15px;
  font-weight: 400;
`;

export const RequestContainer: React.FC = () => (
  <section>
    <h3 css={titleStyle}>Request</h3>
    <Address/>
  </section>
);