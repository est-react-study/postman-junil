import {atom, RecoilValueReadOnly, selector} from "recoil";

export const historyState = atom({
  key: 'historyState',
  default: []
});

export const addSelector: RecoilValueReadOnly<string[]> = selector({
  key: 'addSelector',
  get: ({ get }) => {
    return [ ...get(historyState) ];
  },
});