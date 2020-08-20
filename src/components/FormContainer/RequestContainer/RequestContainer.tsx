/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React, {useState} from "react";
import { RequestAddress } from "./RequestAddress";
import { RequestConfig } from "./RequestConfig";
import {Alert} from "../../Layout/Dialog";

const titleStyle = css`
  font-size: 21px;
  margin: 0;
  padding: 15px;
  font-weight: 400;
`;

export const RequestContainer: React.FC = () => {

  const [alertMessage, setAlertMessage] = useState('');

  return (
    <section>
      <h3 css={titleStyle}>Request</h3>
      <RequestAddress/>
      <RequestConfig/>
      { alertMessage.length > 0 &&
        <Alert onClose={() => setAlertMessage('')}>
          { alertMessage }
        </Alert>
      }
    </section>
  );
};