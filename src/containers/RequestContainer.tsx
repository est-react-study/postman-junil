/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React from "react";
import axios from 'axios';
import { RequestAddress } from "../components/Request/RequestAddress";
import { RequestConfig } from "../components/Request/RequestConfig";
import { getHeadersOf, getQueryParamsOf } from "utils";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headersState, methodState, paramsState, requestBodyState } from "stores/requestStore";
import { responseState } from "stores/responseStore";
import { historyState } from "stores/historyStore";
import { HistoryService } from "services";
import { message } from "components/Common/Alert";

const getJSON = (text: string) => {
  try {
    return JSON.parse(text);
  } catch (e) {
    throw 'JSON 형식이 아닙니다.';
  }
}


export const RequestContainer: React.FC = () => {

  const setResponse = useSetRecoilState(responseState);
  const setHistories = useSetRecoilState(historyState);

  const params = useRecoilValue(paramsState);
  const headers = useRecoilValue(headersState);
  const method = useRecoilValue(methodState);
  const body = useRecoilValue(requestBodyState);

  const submitRequest = async (requestURL: string) => {
    const url = `${requestURL}${getQueryParamsOf(params)}`;
    try {
      const data = ['post', 'put', 'patch'].includes(method.toLocaleLowerCase())
        ? getJSON(body)
        : undefined;
      setResponse(undefined);
      const result = await axios({url, method, headers: getHeadersOf(headers), data})
      HistoryService.push({url, method});
      setHistories(HistoryService.fetchAll());
      setResponse(data);
    } catch (e) {
      console.error(e.response);
      message(e.toString());
    }
  }

  return (
    <section>
      <h2 css={titleStyle}>Request</h2>
      <RequestAddress submitRequest={submitRequest} />
      <RequestConfig />
    </section>
  );
};

const titleStyle = css`
  font-size: 21px;
  margin: 0;
  padding: 15px;
  font-weight: 400;
`;