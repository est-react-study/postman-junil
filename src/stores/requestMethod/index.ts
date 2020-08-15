import {atom, RecoilState} from "recoil";

export const methods: string[] = [ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE' ];

export const methodState: RecoilState<string> = atom({
  key: 'methodState',
  default: methods[0]
});