import { atom, RecoilState } from "recoil";
import { HistoryService } from "services";
import { RequestHistory } from 'model/RequestHistory';

export const historyState: RecoilState<RequestHistory[]> = atom({
  key: 'historyState',
  default: HistoryService.fetchAll()
});