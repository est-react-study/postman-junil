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
      const YMD = dateFormat('M/D(w)', history.createdAt);
      obj[YMD] = obj[YMD] || [];
      obj[YMD].push(history);
      obj[YMD].sort((a, b) => b.createdAt! - a.createdAt!);
      return obj;
    }, {} as { [k: string]: History[] });
    return Object.entries(historyGroup).sort(([ nowDate ], [ nextDate ]) => nextDate > nowDate ? 1 : -1);
  }, [ histories ]);

  return (
    <section css={historiesStyle}>
      <h2 css={titleStyle}>History</h2>
      { historyByDate.length > 0 ?
        historyByDate.map(([ ymd, histories ], key) => (
          <dl key={key}>
            <dt>{ymd}</dt>
            <dd>
              {histories.map((v, key) => (
                <p key={key}>
                  <strong>{v.method}</strong>
                  <span onClick={() => setRequestAddress(v.url)}>
                    {v.url}
                  </span>
                </p>
              ))}
            </dd>
          </dl>
        )) :
        <p css={noneStyles}>검색 내역이 없습니다.</p>
      }
    </section>
  );
}

const historiesStyle = css`
  dl {
    margin: 0;
    padding: 0;
    letter-spacing: -0.5px;
    border-bottom: 1px dotted #ddd;
  }  
  dt {
    font-size: 15px;
    padding: 5px 10px;
    font-weight: 600;
  }
  dd {
    margin: 0;
    p {
      word-break: break-all;
      margin: 0;
      padding: 5px 10px;
      cursor: pointer;
      font-size: 13px;
      color: #666;
      display: flex;
      align-items: center;
      font-family: arial;      
      
      &:hover {
        background: #eff;
      }
      
      > strong {
        font-size: 11px;
        color: #06F;
        width: 30px;
      }
      
      > span {
        width: calc(100% - 30px);
        letter-spacing: 0;
      }
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