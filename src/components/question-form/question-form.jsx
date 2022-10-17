import React, { useRef, useState } from 'react'
import OptionList from './option-list';
import "./question-form.css";
import axios from 'axios';

function QuestionForm(props) {
  console.log("---QuestionForm---");
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');

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
    if (!question) {
      alert("Please enter question");
    }
    else if (options.length < 2) {
      alert("Please enter options\n Note: Minimum 2 options are required!!!")
    }
    else if (!answer) {
      alert("Please select the correct answer");
    }
    else {
      const fd = new FormData(ev.target);
      fd.set('options', JSON.stringify(options));
      fd.set('answer', answer);
      axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/upload-question',
        data: fd,
        headers: { "Content-Type": "multipart/form-data" }
      }).then((response) => {
        props.onQuestionAdd();
        props.onClose();
      })
    }
  }
  return (
    <form onSubmit={(ev) => handleSubmit(ev)} className="question-form">
      <table className="question-form-tb" cellPadding="4px">
        <thead></thead>
        <tbody>
          <tr>
            <th>Question: </th>
            <td>
              <textarea className="text-area" name='question' value={question} onChange={(e) => { setQuestion(e.target.value) }}></textarea>
            </td>
          </tr>
          <tr>
            <th>Options: </th>
            <td>
              <OptionList options={options} addOption={addOption} removeOption={removeOption} setCorrectAnswer={setCorrectAnswer} />
            </td>
          </tr>
          <tr>
            <th>Image: </th>
            <td>
              <input id="img" type="file" accept="image/png, image/gif, image/jpeg" name="image" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>
              <button className="btn btn-secondary h-25 me-2" type="button" onClick={() => { props.onClose() }}>Cancle</button>
              <button className="btn btn-primary h-25" type="submit">Add</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  )
}

export default QuestionForm
