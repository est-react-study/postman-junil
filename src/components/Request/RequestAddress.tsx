/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, {useState} from "react";
import { useRecoilState } from "recoil";
import { methodState, methods } from "stores/requestStore";
import { selectStyle, addressInputStyle, addressStyle, buttonStyle } from "./styles";
import { DefaultButton } from "components/Common/Buttons";
import { validateURL } from "utils";
import { Method } from "axios";

export interface IRequestAddressProps {
  submitRequest: (requestURL: string) => void
}

export const RequestAddress: React.FC<IRequestAddressProps> = ({ submitRequest }: IRequestAddressProps) => {

  const [ method, setMethod ] = useRecoilState(methodState);
  const [ requestURL, setRequestURL ] = useState('');
  const [ isDisabled, setDisabled ] = useState(true);

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value as Method);
  }

  const updateUrl = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRequestURL(target.value);
    setDisabled(!validateURL(requestURL));
  }

  const submitOnEnter = ({ keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      submit();
    }
  }

  const submit = () => {
    if (!validateURL(requestURL)) {
      return setDisabled(true);
    }
    submitRequest(requestURL);
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
        onClick={submit}
        disabled={isDisabled}
        children="Send" />
    </div>
  );
}