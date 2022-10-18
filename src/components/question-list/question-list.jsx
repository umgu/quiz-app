import axios from 'axios';
import React, { useEffect, useState } from 'react'
import QuestionFormModal from '../modal/question-form';
import "./question-list.css";

let selectedQuestion = null;
function QuestionList() {
    console.log("---QuestionList---")
    const [questions, setQuestions] = useState([]);
    const [showQuestionForm, setShowQuestionForm] = useState(false);
    const [refreshToggleFlag, setRefreshToggleFlag] = useState(false);

    useEffect(function () {
        axios.get("http://192.168.81.113:5000/admin/load-questions")
            .then((response) => {
                console.log(response);
                setQuestions(response.data.questions)
            });
    }, [refreshToggleFlag])

    const onFormClose = () => {
        setShowQuestionForm(false);
        selectedQuestion = null;
    }

    const handleDeleteAll = () => {
        if (window.confirm("Do you really want to delete quiz")) {
            setQuestions([]);
        }
    }

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:5000/delete-question/${id}`);
    }

    const handleEdit = (index) => {
        selectedQuestion = questions[index];
        setShowQuestionForm(true);

    }

    return (
        <div className="question-list-container">
            <div className="d-flex justify-content-end mt-3 mb-1">
                <button className="btn btn-danger me-2" onClick={handleDeleteAll}>Delete All</button>
                <button className='btn btn-secondary me-2' onClick={() => { setShowQuestionForm(true) }}>Add Question</button>
            </div>
            <table className="question-list-tb" cellPadding="5px">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Question</th>
                        <th>Options</th>
                        <th>Answer</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((q, i) => {
                        return <tr key={i}>
                            <td><span><b>{i + 1}</b></span></td>
                            <td>
                                <span>{q.question}</span>
                            </td>
                            <td>
                                {q.options.map((op, j) => <p>{String.fromCharCode(65 + j)}. {op}</p>)}
                            </td>
                            <td>
                                <span>{q.answer}</span>
                            </td>
                            <td>
                                {q.img ? <img src={q.img} alt="Image" /> : null}
                            </td>
                            <td>
                                <div>
                                    <button className="btn btn-secondary me-2 mb-2" onClick={() => handleEdit(i)}>Edit</button>
                                    <button className="btn btn-secondary me-2 mb-2" onClick={() => handleDelete(q.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
                <tfoot></tfoot>
            </table>
            <QuestionFormModal show={showQuestionForm} onClose={onFormClose} onQuestionAdd={() => setRefreshToggleFlag(!refreshToggleFlag)} question={selectedQuestion}/>
        </div>
    )
}

export default QuestionList;
