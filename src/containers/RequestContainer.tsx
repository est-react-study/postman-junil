/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React, {useState} from "react";
import axios from 'axios';
import { RequestAddress } from "../components/Request/RequestAddress";
import { RequestConfig } from "../components/Request/RequestConfig";
import { Alert } from "components/Common";
import { getHeadersOf, getQueryParamsOf } from "utils";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { headersState, methodState, paramsState } from "stores/requestStore";
import { responseState } from "stores/responseStore";
import { historyState } from "stores/historyStore";
import { HistoryService } from "../services";

const titleStyle = css`
  font-size: 21px;
  margin: 0;
  padding: 15px;
  font-weight: 400;
`;

export const RequestContainer: React.FC = () => {

  const [alertMessage, setAlertMessage] = useState('');
  const setResponse = useSetRecoilState(responseState);
  const [histories, setHistories] = useRecoilState(historyState);

  const params = useRecoilValue(paramsState);
  const headers = useRecoilValue(headersState);
  const method = useRecoilValue(methodState);

  const submitRequest = (requestURL: string) => {
    const url = `${requestURL}${getQueryParamsOf(params)}`;

    axios({ url, method, headers: getHeadersOf(headers) })
      .then(data => {
        HistoryService.push(url);
        setHistories(HistoryService.fetchAll());
        setResponse(data);
      })
      .catch(e => {
        console.error(e.response);
        setAlertMessage(`${e}`);
      });
  }

  return (
    <section>
      <h2 css={titleStyle}>Request</h2>
      <RequestAddress
        submitRequest={submitRequest}
      />
      <RequestConfig/>
      { alertMessage.length > 0 &&
        <Alert onClose={() => setAlertMessage('')}>
          { alertMessage }
        </Alert>
      }
    </section>
  );
};