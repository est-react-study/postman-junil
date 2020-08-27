/** @jsx jsx **/
import {css, jsx} from '@emotion/core';
import React from "react";
import { useRecoilValue } from "recoil";
import { responseState } from "stores/responseStore";
import Highlight from "react-highlight";

export const ResponseContainer: React.FC = () => {

  const response = useRecoilValue(responseState);

  return (
    <section css={responseContainerStyles}>
      <h2 css={responseTitleStyles}>Response</h2>
      {
        response !== null ?
          <Highlight>
            { JSON.stringify(response.data, null, 4) }
          </Highlight> :
          <p css={noneBlockStyles}>아직 Request를 보내지 않았습니다.</p>
      }
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

export const noneBlockStyles = css`
  margin: 0 15px 15px;
  background: #f5f5f5;
  padding: 20px;
  text-align: center;
  color: #666;
  border-radius: 3px;
  border: 1px solid #ddd;
  font-size: 13px;
`;