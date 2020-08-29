import {atom, RecoilState, RecoilValueReadOnly, selector} from "recoil";
import { Method } from "axios";
import { validateURL} from "utils";

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

export const addressState: RecoilState<string> = atom({
  key: 'addressState',
  default: ''
});

export const addressValidState: RecoilValueReadOnly<boolean> = selector({
  key: 'addressValidState',
  get: ({ get }) => {
    const address = get(addressState);
    return !validateURL(address)
  }
})

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