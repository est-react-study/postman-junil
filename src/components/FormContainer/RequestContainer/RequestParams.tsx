import React from "react";
import {RequestTable} from "./RequestTable";
import {useRecoilState} from "recoil";
import {paramsState} from "stores/requestStore";

export const RequestParams: React.FC = () => {
  const [ data, setData ] = useRecoilState(paramsState);

  return (
    <article>
      <RequestTable
        data={data}
        setData={setData} />
    </article>
  )
};