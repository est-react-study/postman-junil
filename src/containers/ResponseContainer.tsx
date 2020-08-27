/** @jsx jsx **/
import {css, jsx} from '@emotion/core';
import React from "react";
import { useRecoilValue } from "recoil";
import { responseState } from "stores/responseStore";
import { ResponseBody } from "../components/Response/ResponseBody";

export const ResponseContainer: React.FC = () => {

  const response = useRecoilValue(responseState);

  return (
    <section css={responseContainerStyles}>
      <h2 css={responseTitleStyles}>Response</h2>
      <ResponseBody response={response} />
    </section>
  );
}



export const responseContainerStyles = css`
  border-top: 1px solid #ddd;
  overflow: auto;
`;

export const responseTitleStyles = css`
  font-size: 21px;
  margin: 0;
  padding: 15px;
  font-weight: 400;
`;