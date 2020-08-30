import { atom, RecoilState } from "recoil";
import { HistoryService } from "services";
import { History } from 'model/History';

export const historyState: RecoilState<History[]> = atom({
  key: 'historyState',
  default: HistoryService.fetchAll()
});