import {atom, RecoilState} from "recoil";

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