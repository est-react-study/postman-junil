/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, {useState} from "react";
import { allResetStyle } from "../../../reset.style";
import { tabStyle } from "./styles";

const tabs = ['Params', 'Headers', 'Body'];

export const RequestConfig: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div css={allResetStyle}>
      <ul css={tabStyle}>
        {tabs.map((tabName, key) =>
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
