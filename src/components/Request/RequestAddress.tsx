/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, {useState} from "react";
import { useRecoilState } from "recoil";
import {methodState, methods, addressState} from "stores/requestStore";
import { selectStyle, addressInputStyle, addressStyle, buttonStyle } from "./styles";
import { Button } from "components/Common";
import { validateURL } from "utils";
import { Method } from "axios";

export interface IRequestAddressProps {
  submitRequest: (requestURL: string) => void
}

export const RequestAddress: React.FC<IRequestAddressProps> = ({ submitRequest }: IRequestAddressProps) => {

  const [ method, setMethod ] = useRecoilState(methodState);
  const [ isDisabled, setDisabled ] = useState(true);
  const [ requestAddress, setRequestAddress ] = useRecoilState(addressState);

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value as Method);
  }

  const changeAddress = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRequestAddress(target.value);
    setDisabled(!validateURL(requestAddress));
  }

  const submitOnEnter = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      submit();
    }
  }

  const submit = () => {
    if (!validateURL(requestAddress)) {
      return setDisabled(true);
    }
    submitRequest(requestAddress);
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
        onChange={changeAddress}
        onKeyDown={submitOnEnter}
        value={requestAddress}
      />

      <Button
        type="button"
        overrideCss={buttonStyle}
        onClick={submit}
        disabled={isDisabled}
        children="Send" />
    </div>
  );
}