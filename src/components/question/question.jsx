import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import Counter from "../counter";
import { TIME_PER_QUESTION } from '../../constants/constant';
import "./question.css";
import { saveAndNextQuestion, skipQuestion, saveAndSubmit } from '../../redux/actions';
import SuccessfullModal from "../modal/successfull";


function Question({ question, state }) {
    const [openModal, setOpenModal] = useState(false);
    console.log("-----Question-----");
    let answer = "";
    const resetBtn = useRef();
    const skipBtn = useRef();
    const nextBtn = useRef();
    const submitBtn = useRef();
    const dispatch = useDispatch();

    const onClickNextBtn = (ev) => {
        dispatch(saveAndNextQuestion(question, answer));
    }

    const onClickSubmit = ()=>{
        setOpenModal(true);
        dispatch(saveAndSubmit(question, answer));
        console.log(state);
    }

    const onClickSkipBtn = (ev) => {
        dispatch(skipQuestion(question, answer));
    }

    function reset() {
        document.querySelector(".question-wrapper").querySelectorAll(".answer-text").forEach((ans) => {
            ans.classList.remove("clicked");
            ans.style.pointerEvents = "initial";
        });
        if(state.current_question_number === state.total_question_number) {
            displayBtn("submit");
        }
        else{
            displayBtn(["skip"]);
        }
        answer = "";
    }
    const onClickResetBtn = (ev) => {
        reset();
    }

    const onAnswerClick = (ev, selected_answer) => {
        answer = selected_answer;
        document.querySelector(".question-wrapper").querySelectorAll(".answer-text").forEach((ans) => {
            ans.classList.remove("clicked")
        })
        ev.target.classList.add("clicked");
        if(state.current_question_number === state.total_question_number) {
            displayBtn(["submit", "reset"]);
        }
        else{
            displayBtn(["reset", "skip", "next"])
        }
    }

    const onTimeout = (current_question_number) => {
        if(current_question_number === state.total_question_number) {
            displayBtn("submit");
        }
        else{
            displayBtn(["next"])
        }
        document.querySelector(".question-wrapper").querySelectorAll(".answer-text").forEach((ans) => {
            ans.style.pointerEvents = "none";
        })
    }

    const displayBtn = (btns) => {
        resetBtn.current.style.display = btns.includes("reset") ? "block" : "none";
        skipBtn.current.style.display = btns.includes("skip") ? "block" : "none";
        nextBtn.current.style.display = btns.includes("next") ? "block" : "none";
        submitBtn.current.style.display = btns.includes("submit") ? "block" : "none";
    }

    useEffect(function () {
        reset();
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="timer-wrapper mb-2">
                            <Counter time={TIME_PER_QUESTION} onTimeout={onTimeout} />
                        </div>
                        <span style={{ textAlign: "left", letterSpacing: "1.12px", color: "#858494" }}>QUESTION {state.current_question_number} of {state.total_question_number}</span>
                        <div className="question-wrapper mt-3">
                            <p className="question-text">{question.question}</p>
                            <div className="answer-wrapper">
                                {question.options.map((ans, index) => {
                                    return <div className="answer-text ms-2 mb-1" key={index} onClick={(ev) => { onAnswerClick(ev, ans) }}>
                                        <p className="m-0 p-0"><b>{String.fromCharCode(65 + index)}</b>. <span>{ans}</span></p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    {question.img && <div className='col'>
                        <div className='question-image h-100'>
                            <img src={question.img} alt="image loading..." className='w-100 h-100' />
                        </div>
                    </div>}
                </div>
            </div>
            <div className="action-btn-container d-flex justify-content-end">
                <button type="button" className="btn btn-danger n_btn me-4 btn-sm" ref={resetBtn} onClick={onClickResetBtn}>Reset</button>
                <button type="button" className="btn btn-secondary n_btn me-4 btn-sm" ref={skipBtn} onClick={onClickSkipBtn}>Skip</button>
                <button type="button" className="btn btn-primary n_btn btn-sm" ref={nextBtn} onClick={onClickNextBtn}>Next</button>
                <button type="button" className="btn btn-primary n_btn btn-sm" ref={submitBtn} onClick={onClickSubmit}>Submit</button>
            </div>
            {openModal?<SuccessfullModal />:null}
        </>
    )
}

export default Question;
