/** @jsx jsx **/
import {css, jsx} from "@emotion/core";
import React from "react";
import { IRequestTable } from "stores/requestStore";
import { SetterOrUpdater } from "recoil";
import { requestTableStyles } from './styles';
import { DefaultButton } from "components/Layout/Buttons";

interface RequestTableProps {
  data: IRequestTable[],
  setData: SetterOrUpdater<IRequestTable[]>
}

export const RequestTable: React.FC<RequestTableProps> = ({ data, setData }: RequestTableProps) => {

  return (
    <div css={requestTableStyles}>
      { data.length !== 0 ?
        <ul>
          { data.map(({ key, value }, index) =>
            <li key={index}>
              <input type="text" value={key} placeholder="key" />
              <input type="text" value={value} placeholder="value" />
            </li>
          ) }
        </ul> :
        <p className="noneData">현재 등록된 파라미터가 없습니다.</p>
      }
      <div css={css`margin-top: 10px;`}>
        <DefaultButton type="button" value="추가" />
      </div>
    </div>
  )
};