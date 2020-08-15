import {atom, RecoilValueReadOnly, selector} from "recoil";

enum Method {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
}

export const method = atom({
  key: 'method',
  default: Method.GET
});

export const methodSelector: RecoilValueReadOnly<Method> = selector({
  key: 'addSelector',
  get: ({ get }) => {
    return get(method);
  },
});