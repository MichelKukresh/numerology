import React from 'react';
import style from "./MyButton.module.css";
type Props = {
    heders: string;
    type: "submit" | "button";
    
}

const MyButton: React.FC<Props> = ({ heders, type }) => {
  return (
    
      <button type={type} className={style.wrapper }>{heders}</button>
    
  );
}

export default MyButton;