/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { historyState } from "stores/historyStore";
import { addressState } from "stores/requestStore";
import { dateFormat } from "utils";
import { History } from "model/History";

export const Histories: React.FC = () => {

  const histories = useRecoilValue(historyState);
  const setRequestAddress = useSetRecoilState(addressState);
  const historyByDate = useMemo(function () {
    const historyGroup = histories.reduce((obj, history) => {
      const YMD = dateFormat('Y-M-D', history.createdAt);
      obj[YMD] = obj[YMD] || [];
      obj[YMD].push(history);
      return obj;
    }, {} as { [k: string]: History[] });
    return Object.entries(historyGroup).sort((a, b) => b[0] > a[0] ? 1 : -1);
  }, [ histories ]);

  return (
    <section css={historiesStyle}>
      <h2 css={titleStyle}>History</h2>
      { historyByDate.length > 0 ?
        historyByDate.map(([ ymd, histories ], key) => (
          <div>
            <h3>{ymd}</h3>
            <ul>
              {histories.map((v, key) => (
                <li key={key} onClick={() => setRequestAddress(v.url)}>
                  {v.url}
                </li>
              ))}
            </ul>
          </div>
        )) :
        <p css={noneStyles}>검색 내역이 없습니다.</p>
      }
    </section>
  );
}

const historiesStyle = css`
  ul, li {
    list-style: none;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    word-break: break-all;
    margin: 0;
    padding: 5px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
      background: #eff;
    }
  }
`;

const titleStyle = css`
  border-bottom: 2px solid #06F;
  padding: 15px;
  margin: 0;
  font-size: 21px;
  font-weight: 400;
`;

const noneStyles = css`
  text-align: center;
  font-size: 13px;
  color: #666;
`;