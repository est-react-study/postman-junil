/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {historyState} from "../../stores/historyStore";
import {addressState} from "../../stores/requestStore";

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


export const Histories: React.FC = () => {
  const histories = useRecoilValue(historyState);

  const setRequestAddress = useSetRecoilState(addressState);

  return (
    <section css={historiesStyle}>
      <h2 css={titleStyle}>History</h2>
      { histories.length > 0 ?
        <ul>
          {histories.map((v, key) => (
            <li key={key} onClick={() => setRequestAddress(v.url)}>
              {v.url}
            </li>
          ))}
        </ul> :
        <p css={noneStyles}>검색 내역이 없습니다.</p>
      }
    </section>
  );
}