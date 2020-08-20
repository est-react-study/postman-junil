import { atom, RecoilState } from "recoil";
import { Method } from "axios";

export interface IRequestTable {
  key: string
  value: string
}

export const methods: Method[] = [ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' ];
export const configTabs: string[] = ['Params', 'Headers', 'Body'];

export const methodState: RecoilState<Method> = atom({
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