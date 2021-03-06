/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, {useMemo} from "react";
import {useRecoilState} from "recoil";
import {methodState, methods, addressState} from "stores/requestStore";
import { selectStyle, addressInputStyle, addressStyle, buttonStyle } from "./styles";
import { Button } from "components/Common";
import { Method } from "axios";
import {validateURL} from "../../utils";

export interface IRequestAddressProps {
  submitRequest: (requestURL: string) => void
}

export const RequestAddress: React.FC<IRequestAddressProps> = ({ submitRequest }: IRequestAddressProps) => {

  const [ method, setMethod ] = useRecoilState(methodState);
  const [ requestAddress, setRequestAddress ] = useRecoilState(addressState);
  const addressValid: boolean = useMemo(() => !validateURL(requestAddress),  [ requestAddress ]);

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value as Method);
  }

  const changeAddress = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRequestAddress(target.value);
  }

  const submitOnEnter = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') submit();
  }

  const submit = () => submitRequest(requestAddress);

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
        disabled={addressValid}
        children="Send" />
    </div>
  );
}