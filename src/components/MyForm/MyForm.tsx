import React, { ChangeEvent, useState } from "react";
import style from "./MyForm.module.css";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import useDecoding from "./hook/useDecoding";
import { useContext } from 'react';
import { DecoderData } from "../../pages/Start/Start";

const MyForm: React.FC = () => {

  const {setDecoderData} = useContext(DecoderData);

  const {putDate} = useDecoding(setDecoderData);
  const [value, setValue] = useState("");
  const [isValidateDate, setValidateDate] = useState(false);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setValidateDate(e.target.validity.valid);    
    
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(isValidateDate) {
      putDate(value);
    }
       
    setValue("");
    
  }

  return (
    <form className={style.wrapper} onSubmit={handleSubmit}>
      <MyInput handleInputChange={handleInputChange} value={value} />
      <MyButton type="submit" heders="Расчитать" />
    </form>
  );
};

export default MyForm;
