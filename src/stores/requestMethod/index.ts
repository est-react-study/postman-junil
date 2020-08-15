import {atom, RecoilValueReadOnly, selector} from "recoil";

export const methods: string[] = [ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' ];

export const methodState = atom({
  key: 'methodState',
  default: methods[0]
});

export const methodSelector: RecoilValueReadOnly<string> = selector({
  key: 'addSelector',
  get: ({ get }) => {
    return get(methodState);
  },
});