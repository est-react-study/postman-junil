/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from "react";
import { useRecoilState } from "recoil";
import { methodState, methods } from "../../stores/requestMethod";
import { selectStyle, addressInputStyle } from "./styles";

export const Address: React.FC = () => {

  const [method, setMethod] = useRecoilState(methodState);

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value);
  }

  return (
    <header>
      <select
        value={method}
        onChange={changeMethod}
        css={selectStyle}
      >
        { methods.map((v, key) => <option value={v} key={key}>{v}</option>) }
      </select>
      <input
        type="text"
        css={addressInputStyle}
      />
    </header>
  );
}