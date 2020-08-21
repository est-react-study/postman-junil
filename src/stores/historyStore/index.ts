import { atom, RecoilState } from "recoil";

export const historyState: RecoilState<string[]> = atom({
  key: 'historyState',
  default: [] as string[]
});