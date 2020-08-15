import {atom, RecoilValueReadOnly, selector} from "recoil";

export const histories = atom({
  key: 'histories',
  default: []
});

export const addSelector: RecoilValueReadOnly<string[]> = selector({
  key: 'addSelector',
  get: ({ get }) => {
    return [ ...get(histories) ];
  },
});