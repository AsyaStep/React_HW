import React, { useState } from "react";
import { Div } from '../Div';
import './style.css'

export function Button({ name, onClick }) {
  const [isShow, setIsShow] = useState(false);
  
  const clickButton = () => {
    setIsShow(!isShow);    
  };

  return (
    <>
      <div>Блок</div>
      <button className = "button" onClick={clickButton}>{isShow ? 'Сбросить' : 'Показать'}</button>
      {isShow && <Div />}
    </>
  );
}

export default Button;
