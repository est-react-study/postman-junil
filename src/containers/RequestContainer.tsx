/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React from "react";
import axios from 'axios';
import { RequestAddress } from "../components/Request/RequestAddress";
import { RequestConfig } from "../components/Request/RequestConfig";
import { getHeadersOf, getQueryParamsOf } from "utils";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headersState, methodState, paramsState } from "stores/requestStore";
import { responseState } from "stores/responseStore";
import { historyState } from "stores/historyStore";
import { HistoryService } from "../services";
import {message} from "../components/Common/Alert";


export const RequestContainer: React.FC = () => {

  const setResponse = useSetRecoilState(responseState);
  const setHistories = useSetRecoilState(historyState);

  const params = useRecoilValue(paramsState);
  const headers = useRecoilValue(headersState);
  const method = useRecoilValue(methodState);

  const submitRequest = (requestURL: string) => {
    const url = `${requestURL}${getQueryParamsOf(params)}`;
    setResponse(undefined);
    axios({ url, method, headers: getHeadersOf(headers) })
      .then(data => {
        HistoryService.push({ url, method });
        setHistories(HistoryService.fetchAll());
        setResponse(data);
      })
      .catch(e => {
        console.error(e.response);
        message(e.toString());
      });
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