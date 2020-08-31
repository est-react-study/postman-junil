/** @jsx jsx **/
import { css, jsx } from '@emotion/core';
import React from "react";
import {TextArea} from "../Common/TextArea";
import {useRecoilState} from "recoil";
import {requestBodyState} from "stores/requestStore";

export const RequestBody: React.FC = () => {

  const [requestBody, setRequestBody] = useRecoilState(requestBodyState);

  const updateRequestBody = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRequestBody(target.value);
  }

  return (
    <article css={requestBodyStyles}>
      <span css={contentTypeStyles}>Content-Type: application/json;</span>
      <TextArea
        onChange={updateRequestBody}
        height="200px"
        placeholder="JSON 형식으로 작성해주세요"
        value={requestBody}
        required />
    </article>
  );
}

const requestBodyStyles = css`
  padding: 10px;
`;

const contentTypeStyles = css`
  display: block;
  width: 200px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border-radius: 3px;
  font-size: 13px;
  color: #666;
  font-weight: bold;
  z-index: 10;
  padding: 10px;
`;