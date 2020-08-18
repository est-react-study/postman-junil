import {atom, RecoilState, RecoilValueReadOnly, selector} from "recoil";

export interface IRequestTable {
  key: string
  value: string
}

export const methods: string[] = [ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' ];
export const configTabs: string[] = ['Params', 'Headers', 'Body'];

export const methodState: RecoilState<string> = atom({
  key: 'methodState',
  default: methods[0]
});

export const tabState: RecoilState<number> = atom({
  key: 'tabState',
  default: 0
});

const headers: IRequestTable[] = [];
export const headersState: RecoilState<IRequestTable[]> = atom({
  key: 'headersState',
  default: headers
});
export const headersSelector: RecoilValueReadOnly<{ [k: string]: string }> = selector({
  key: 'headersSelector',
  get: ({ get }) => get(headersState).reduce((obj: { [k: string]: string }, { key, value }) => {
    if (![ key.trim(), value.trim() ].includes('')) {
      obj[key] = value;
    }
    return obj;
  }, {})
})

const params: IRequestTable[] = [];
export const paramsState: RecoilState<IRequestTable[]> = atom({
  key: 'paramsState',
  default: params
});