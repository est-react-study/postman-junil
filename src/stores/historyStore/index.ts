import { atom, RecoilState } from "recoil";
import { HistoryService } from "services";

export const historyState: RecoilState<string[]> = atom({
  key: 'historyState',
  default: HistoryService.fetchAll()
});