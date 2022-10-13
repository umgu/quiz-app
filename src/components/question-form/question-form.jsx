import React, { useRef, useState } from 'react'
import OptionList from './option-list';
import "./question-form.css";

function QuestionForm() {
  console.log("---QuestionForm---");
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');

  console.log(answer);

  const addOption = (option) => {
    setOptions([...options, option]);
  };

  const removeOption = (optionIndex) => {
    if (options[optionIndex] === answer) {
      setAnswer("");
    }
    setOptions(options.filter((op, index) => optionIndex !== index))

  }

  const setCorrectAnswer = (correctAnswer) => {
    setAnswer(correctAnswer);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(!question){
      alert("Please enter question");
    }
    else if(options.length < 2){
      alert("Please enter options\n Note: Minimum 2 options are required!!!")
    }
    else if (!answer) {
      alert("Please select the correct answer");
    }
    else {
      const data = new FormData(ev.target);
      data.set('options', JSON.stringify(options));
      data.set('answer', answer);
      fetch('http://127.0.0.1:5000/upload-question', {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      }).then(response => console.log(response)).then(response => console.log(response)).catch(error => console.log("ERROR: Not added"));
    }
  }
  return (
    <form encType="multipart/form-data" onSubmit={(ev) => handleSubmit(ev)} className="question-form">
      <textarea className="text-area" name='question' value={question} onChange={(e) => { setQuestion(e.target.value) }}></textarea>
      <OptionList options={options} addOption={addOption} removeOption={removeOption} setCorrectAnswer={setCorrectAnswer} />
      <input id="img" type="file" accept="image/png, image/gif, image/jpeg" name="image" />
      <button className="btn btn-primary h-25" type="submit">Add Question</button>
    </form>
  )
}

export default QuestionForm
