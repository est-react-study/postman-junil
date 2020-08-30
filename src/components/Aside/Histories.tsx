/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { SetterOrUpdater } from "recoil";
import { RequestHistory } from "model/RequestHistory";

export interface IHistoriesProps {
  historyByDate: [string, RequestHistory[]][]
  setRequestAddress: SetterOrUpdater<string>
}

export const Histories: React.FC<IHistoriesProps> = ({ historyByDate, setRequestAddress }: IHistoriesProps) => (
  <section css={historiesStyle}>
    <h2 css={titleStyle}>History</h2>
    <div css={historiesWrapperStyles}>
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
    </div>
  </section>
);

const historiesStyle = css`
  height: 100%;  
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

const historiesWrapperStyles = css`
  overflow: auto;
  height: calc(100% - 56px)
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