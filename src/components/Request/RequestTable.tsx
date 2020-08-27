/** @jsx jsx **/
import { css, jsx } from "@emotion/core";
import React from "react";
import { IRequestTable } from "stores/requestStore";
import { SetterOrUpdater } from "recoil";
import { requestTableStyles } from './styles';
import { Button, Input } from "components/Common";

interface RequestTableProps {
  data: IRequestTable[],
  setData: SetterOrUpdater<IRequestTable[]>
}

const inputStyles = css`
  width: calc(50% - 2.5px)  
`;

export const RequestTable: React.FC<RequestTableProps> = ({ data, setData }: RequestTableProps) => {

  const addData = () => setData([
    ...data,
    { key: '', value: '' }
  ]);

  const changeDataOfIndex = (property: string, index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDataList: IRequestTable[] = [ ...data ];
    newDataList[index] = {...newDataList[index], [property]: e.target.value};
    setData(newDataList);
  }

  return (
    <div css={requestTableStyles}>
      { data.length !== 0 ?
        <ul>
          { data.map(({ key, value }, index) =>
            <li key={index}>
              <Input
                type="text"
                value={key}
                onChange={changeDataOfIndex('key', index)}
                overrideCss={inputStyles}
                placeholder="key" />
              <Input
                type="text"
                value={value}
                onChange={changeDataOfIndex('value', index)}
                overrideCss={inputStyles}
                placeholder="value" />
            </li>
          ) }
        </ul> :
        <p className="noneData">현재 등록된 파라미터가 없습니다.</p>
      }
      <div css={css`margin-top: 10px;`}>
        <Button
          type="button"
          onClick={addData}
          children="추가" />
      </div>
    </div>
  )
};