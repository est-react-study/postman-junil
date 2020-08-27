import React from "react";
import Highlight from "react-highlight";
import {css} from "@emotion/core";
import {AxiosResponse} from "axios";

export interface IResponseBodyProps {
  response?: AxiosResponse
}

export const ResponseBody: React.FC<IResponseBodyProps> = ({ response }: IResponseBodyProps) => {
  return (
    <>
      {
        response ?
          <Highlight>
            { JSON.stringify(response.data, null, 4) }
          </Highlight> :
          <p css={noneBlockStyles}>아직 Request를 보내지 않았습니다.</p>
      }
    </>
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