/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import { methodState, methods, paramsState, headersState } from "stores/requestStore";
import { selectStyle, addressInputStyle, addressStyle, buttonStyle } from "./styles";
import { DefaultButton } from "../../Layout/Buttons";
import {validateURL} from "../../../utils";

export const RequestAddress: React.FC = () => {

  const [ method, setMethod ] = useRecoilState(methodState);
  const params = useRecoilValue(paramsState);
  const headers = useRecoilValue(headersState);
  const [ requestURL, setRequestURL ] = useState('');

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value);
  }

  const updateUrl = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRequestURL(target.value);
  }

  const submitOnEnter = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      submitRequest();
    }
  }

  const submitRequest = () => {
    console.log(validateURL(requestURL));
    console.log(method);
    console.log(headers);
    console.log(params);
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
        onInput={updateUrl}
        onKeyDown={submitOnEnter}
      />

      <DefaultButton
        type="button"
        overrideCss={buttonStyle}
        onClick={submitRequest}
        children="Send" />
    </div>
  );
}