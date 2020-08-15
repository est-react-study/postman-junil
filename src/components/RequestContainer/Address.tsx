import React, {useEffect} from "react";
import { useRecoilState } from "recoil";
import { methodState, methods } from "../../stores/requestMethod";


export const Address: React.FC = () => {

  const [method, setMethod] = useRecoilState(methodState);

  const changeMethod = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(target.value);
  }

  useEffect(() => {
    console.log(method);
  });

  return (
    <header>
      <select value={method} onChange={changeMethod}>
        { methods.map((v, key) => <option value={v} key={key}>{v}</option>) }
      </select>
      <input />
    </header>
  );
}