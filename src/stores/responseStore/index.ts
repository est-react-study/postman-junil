import {atom, RecoilState} from "recoil";

export const responseState: RecoilState<any> = atom({
  key: 'responseState',
  default: null
})