/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import Highlight from "react-highlight";
import {AxiosResponse} from "axios";

export interface IResponseBodyProps {
  response?: AxiosResponse
}

export const ResponseBody: React.FC<IResponseBodyProps> = ({ response }: IResponseBodyProps) => {
  const responseBody = response?.headers['content-type'].includes('application/json')
                        ? JSON.stringify(response?.data, null, 4)
                        : response?.data;
  return (
    <React.Fragment>
      {
        response
          ? <Highlight> {responseBody} </Highlight>
          : <p css={noneBlockStyles}>아직 Request를 보내지 않았습니다.</p>
      }
    </React.Fragment>
  );
}

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