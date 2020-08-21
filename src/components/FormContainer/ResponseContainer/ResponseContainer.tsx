/** @jsx jsx **/
import { jsx } from '@emotion/core';
import React from "react";
import { responseContainerStyles, responseTitleStyles } from "./styles";

export const ResponseContainer: React.FC = () => {
  return (
    <section css={responseContainerStyles}>
      <h2 css={responseTitleStyles}>Response</h2>
      아직 Request를 보내지 않았습니다.
    </section>
  );
}
