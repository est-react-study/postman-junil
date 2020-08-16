/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, {useState} from "react";
import { useRecoilState } from "recoil";
import { methodState, methods } from "../../../stores/requestMethod";
import { selectStyle, addressInputStyle, addressStyle, buttonStyle } from "./styles";

export const Address: React.FC = () => {

  const [ method, setMethod ] = useRecoilState(methodState);
  const [ requestURL, setRequestURL ] = useState('');

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value);
  }

  const updateUrl = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRequestURL(target.value);
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
        onKeyDown={() => console.log(requestURL)}
      />

      <button
        type="button"
        css={buttonStyle}
      >
        Send
      </button>
    </div>
  );
}