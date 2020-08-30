import React, {useMemo} from "react";
import { Histories } from "components/Aside/Histories";
import {dateFormat} from "utils";
import { RequestHistory} from "model/RequestHistory";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {historyState} from "stores/historyStore";
import {addressState} from "stores/requestStore";

export const AsideContainer: React.FC = () => {

  const histories = useRecoilValue(historyState);

  const historyByDate = useMemo(function () {
    const historyGroup = histories.reduce((obj, history) => {
      const YMD = dateFormat('M/D(w)', history.createdAt);
      obj[YMD] = obj[YMD] || [];
      obj[YMD].push(history);
      obj[YMD].sort((a, b) => b.createdAt! - a.createdAt!);
      return obj;
    }, {} as { [k: string]: RequestHistory[] });
    return Object.entries(historyGroup).sort(([ nowDate ], [ nextDate ]) => nextDate > nowDate ? 1 : -1);
  }, [ histories ]);

  const setRequestAddress = useSetRecoilState(addressState);

  return (
    <aside className="asideContainer">
      <Histories
        historyByDate={historyByDate}
        setRequestAddress={setRequestAddress}
      />
    </aside>
  );
}