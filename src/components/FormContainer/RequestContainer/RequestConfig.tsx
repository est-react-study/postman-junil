/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { allResetStyle } from "reset.style";
import { tabStyle } from "./styles";
import { configTabs, tabState } from "stores/requestStore";
import { useRecoilState } from "recoil";

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
    </div>
  )
}
