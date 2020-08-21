/** @jsx jsx **/
import { jsx } from '@emotion/core';
import React from "react";
import { responseContainerStyles, responseTitleStyles } from "./styles";
import {useRecoilValue} from "recoil";
import {responseState} from "../../../stores/responseStore";

export const ResponseContainer: React.FC = () => {

  const response = useRecoilValue(responseState);

  return (
    <section css={responseContainerStyles}>
      <h2 css={responseTitleStyles}>Response</h2>
      {
        response !== null
        ? <div>{ JSON.stringify(response.data) }</div>
        : <p>아직 Request를 보내지 않았습니다.</p>
      }
    </section>
  );
}
