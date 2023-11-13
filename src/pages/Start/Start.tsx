import { createContext, useState } from "react";
import { GroupTriangle, MyForm} from "../../components";
import style from "./Start.module.css";

export const them = {years: 1};

export const DecoderData = createContext(them);


export default function Start() {
  const [decoderData, setDecoderData] = useState();

  console.log(decoderData);
  return (
    <DecoderData.Provider value={{setDecoderData}}>
    <div className={style.wrapper}>
      <h3>Школа Нумерологии</h3>
      <MyForm />
      <GroupTriangle/>
    </div>
    </DecoderData.Provider>
  );
}
