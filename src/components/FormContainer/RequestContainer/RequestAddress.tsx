/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {methodState, methods, paramsState, headersSelector} from "stores/requestStore";
import { selectStyle, addressInputStyle, addressStyle, buttonStyle } from "./styles";
import { DefaultButton } from "../../Layout/Buttons";
import { validateURL, getQueryParamsOf } from "utils";

export const RequestAddress: React.FC = () => {

  const [ method, setMethod ] = useRecoilState(methodState);
  const params = useRecoilValue(paramsState);
  const headers = useRecoilValue(headersSelector);
  const [ requestURL, setRequestURL ] = useState('');
  const [ isDisabled, setDisabled ] = useState(true);

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value);
  }

  const updateUrl = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRequestURL(target.value);
    setDisabled(!validateURL(requestURL));
  }

  const submitOnEnter = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      submitRequest();
    }
  }

  const submitRequest = () => {
    if (!validateURL(requestURL)) {
      return setDisabled(true);
    }
    const url = `${requestURL}${getQueryParamsOf(params)}`;

    fetch(url, { headers })
      .then(res => res.json())
      .then(console.log);
  }

  return (
    <div css={addressStyle}>
      <select
        value={method}
        onChange={changeMethod}
        css={selectStyle}
      >
        { methods.map((v, key) =>
          <option value={v} key={key}>{v}</option>)
        }
      </select>

      <input
        type="text"
        css={addressInputStyle}
        onChange={updateUrl}
        onKeyDown={submitOnEnter}
      />

      <DefaultButton
        type="button"
        overrideCss={buttonStyle}
        onClick={submitRequest}
        disabled={isDisabled}
        children="Send" />
    </div>
  );
}