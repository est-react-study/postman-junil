/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { allResetStyle } from "reset.style";
import { tabStyle } from "./styles";
import { configTabs, tabState } from "stores/requestStore";
import { useRecoilState } from "recoil";
import { RequestParams } from "./RequestParams";
import { RequestHeaders } from "./RequestHeaders";
import { RequestBody } from "./RequestBody";

export const RequestConfig: React.FC = () => {

  const [activeTab, setActiveTab] = useRecoilState(tabState);

  return (
    <div css={allResetStyle}>
      <ul css={tabStyle}>
        {configTabs.map((tabName, key) =>
          <li
            key={key}
            className={key === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(key)}
          >
            {tabName}
          </li>
        )}
      </ul>
      {
        activeTab === 0 ? <RequestParams /> :
        activeTab === 1 ? <RequestHeaders /> :
        activeTab === 2 ? <RequestBody /> :
        ''
      }
    </div>
  )
}
