import { atom, selector } from "recoil";

export const histories = atom({
  key: 'histories',
  default: []
});

export const addSelector = selector({
  key: 'addSelector',
  get: ({ get }) => {
    return [ ...get(histories) ];
  },
});