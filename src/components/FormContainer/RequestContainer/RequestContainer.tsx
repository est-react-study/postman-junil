/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React, {useState} from "react";
import { RequestAddress } from "./RequestAddress";
import { RequestConfig } from "./RequestConfig";
import { Alert } from "components/Layout/Dialog";
import { getHeadersOf, getQueryParamsOf } from "utils";
import { useRecoilValue} from "recoil";
import { headersState, paramsState } from "stores/requestStore";

const titleStyle = css`
  font-size: 21px;
  margin: 0;
  padding: 15px;
  font-weight: 400;
`;

export const RequestContainer: React.FC = () => {

  const [alertMessage, setAlertMessage] = useState('');

  const params = useRecoilValue(paramsState);
  const headers = useRecoilValue(headersState);

  const submitRequest = async (requestURL: string) => {
    const url = `${requestURL}${getQueryParamsOf(params)}`;
    try {
      const text = await fetch(url, { headers: getHeadersOf(headers) }).then(res => res.text())
      console.log(text);
    } catch (e) {
      setAlertMessage(e);
    }
  }

  return (
    <section>
      <h3 css={titleStyle}>Request</h3>
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