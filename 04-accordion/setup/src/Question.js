import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {

const [showCase, setShowCase] = useState(false);

  return (

    <article className = 'question'>
  <header>
    <h3>{title}</h3>
    <button  type="button"  className = 'btn' onClick={() => {
      setShowCase(!showCase)
    }}> {showCase? <AiOutlineMinus/>: <AiOutlinePlus/>}  </button>
  </header>
  
  <p>{showCase && info}</p>
  </article>

  );

};

export default Question;
