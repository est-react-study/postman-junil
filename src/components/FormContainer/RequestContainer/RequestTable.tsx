/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import { IRequestTable } from "stores/requestStore";
import { SetterOrUpdater } from "recoil";
import { requestTableStyles } from './styles';
import { DefaultButton } from "components/Layout/Buttons";
import {DefaultInput} from "../../Layout/Forms";

interface RequestTableProps {
  data: IRequestTable[],
  setData: SetterOrUpdater<IRequestTable[]>
}

export const RequestTable: React.FC<RequestTableProps> = ({ data, setData }: RequestTableProps) => {

  const addData = () => setData([
    ...data,
    { key: '', value: '' }
  ]);

  return (
    <div css={requestTableStyles}>
      { data.length !== 0 ?
        <ul>
          { data.map(({ key, value }, index) =>
            <li key={index}>
              <DefaultInput
                type="text"
                value={key}
                placeholder="key" />
              <DefaultInput
                type="text"
                value={value}
                placeholder="value" />
            </li>
          ) }
        </ul> :
        <p className="noneData">현재 등록된 파라미터가 없습니다.</p>
      }
      <div css={css`margin-top: 10px;`}>
        <DefaultButton
          type="button"
          onClick={addData}
          children="추가" />
      </div>
    </div>
  )
};