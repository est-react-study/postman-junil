import { atom, RecoilState } from "recoil";

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

const params: IRequestTable[] = [];
export const paramsState: RecoilState<IRequestTable[]> = atom({
  key: 'paramsState',
  default: params
});