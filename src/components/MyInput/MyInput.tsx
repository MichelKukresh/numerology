import React, { ChangeEvent} from "react";
import style from "./MyInput.module.css";

type Props = {
  value: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MyInput: React.FC<Props> = ({ handleInputChange, value }) => {
  
  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    handleInputChange(e);
  }
  
  return (
    <div>
      <input
        className={style.wrapper}
        type="date"
        name="date"
        max="2100-01-01" 
        min="1900-12-31"
        placeholder="ДД.ММ.ГГГГ"
        onChange={(e) => onChangeInput(e)}
        formNoValidate
        value={value}
      />      
    </div>
  );
};

export default MyInput;
