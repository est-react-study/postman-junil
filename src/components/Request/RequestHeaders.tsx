import React from "react";
import { RequestTable } from "./RequestTable";
import { headersState } from "stores/requestStore";
import { useRecoilState } from "recoil";

export const RequestHeaders: React.FC = () => {
  const [ data, setData ] = useRecoilState(headersState);

  return (
    <article>
      <RequestTable
        data={data}
        setData={setData} />
    </article>
  )
};