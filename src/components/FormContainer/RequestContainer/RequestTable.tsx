import React from "react";
import { IRequestTable } from "stores/requestStore";
import { SetterOrUpdater } from "recoil";

interface RequestTableProps {
  data: IRequestTable[],
  setData: SetterOrUpdater<IRequestTable[]>
}

export const RequestTable: React.FC<RequestTableProps> = ({ data, setData }: RequestTableProps) => {

  return (
    <div>
      { data.length !== 0 ?
        <ul>
          { data.map(({ key, value }, index) =>
            <li key={index}>
              <input type="text" value={key} placeholder="key" />
              <input type="text" value={value} placeholder="value" />
            </li>
          ) }
        </ul> :
        <p>현재 등록된 파라미터가 없습니다.</p>
      }
      <button type="button">
        추가
      </button>
    </div>
  )
};