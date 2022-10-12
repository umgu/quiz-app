import React, { useRef, useState } from 'react'
import OptionList from './option-list';
import "./question-form.css";

function QuestionForm() {
  console.log("---QuestionForm---");
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');

  console.log(answer);

  const addOption = (option)=>{
    setOptions([...options, option]);
  };

  const removeOption = (optionIndex)=>{
    if(options[optionIndex] === answer) {
      setAnswer("");
    }
    setOptions(options.filter((op, index) => optionIndex !== index))

  }

  const setCorrectAnswer = (correctAnswer)=>{
      setAnswer(correctAnswer);
  }


  return (
    <div className="question-form-container">
        <textarea className="text-area" value={question} onChange={(e)=>{setQuestion(e.target.value)}}></textarea>
        <OptionList options={options} addOption={addOption} removeOption={removeOption} setCorrectAnswer={setCorrectAnswer}/>
        <button className="btn btn-primary h-25">Add Question</button>
    </div>
  )
}

export default QuestionForm
