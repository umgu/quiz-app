import React, { useEffect, useRef, useState } from 'react';

function OptionList({ options, addOption, removeOption, setCorrectAnswer }) {
  console.log("---OptionList---");
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState("");

  useEffect(()=>{
    setCorrectAnswer(answer);
  }, [answer]);

  const handleDeleteOption = (index, op) =>{
    if(answer === op) {
      alert("You can delete the answer.\n If you want to delete option which si set as answer right now, you have to set another correct answer before")
    }
    else {
      removeOption(index);
    }
  }

  return (
    <div className="options-container">
      <input type="text" value={option} onChange={(e)=>setOption(e.target.value)}/>
      <button onClick={(e) => {
        let flag = true;
        options.forEach(element => {
          if(element === option){
            flag = false;
          }
        });
        if (flag && option) {
          addOption(option);
        }
        setOption("");
  
      }}>+</button>
      <div className="options-list">
        {options.map((op, index)=><div><button onClick={()=>{handleDeleteOption(index, op)}}>-</button> {op} <input className="me-0" name="option-radio" type="radio" onClick={(e)=>{setAnswer(op)}}/></div>)}
      </div>
    </div>
  )
}

export default OptionList
