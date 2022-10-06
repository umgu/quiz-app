import { cleanup } from "@testing-library/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./counter.css";

var progressValue;
var current_question_number;
function Counter({ time, onTimeout}) {
    console.log("---Counter---")
    current_question_number = useSelector(state => state.quiz.current_question_number);
    progressValue = time;
    const startTimer = () => {
        const progressBar = document.querySelector(".progress-container");
        const valueContainer = document.querySelector(".value-container");
        valueContainer.textContent = progressValue;
        const progress = setInterval(() => {
            if (progressValue >= 0) {
                valueContainer.textContent = progressValue;
                progressBar.style.background = `conic-gradient(#d9d9d9 ${(time - progressValue) * 36
                    }deg, #ff8fa2 ${(time - progressValue) * 36}deg)`;
                if (progressValue === 0){
                    valueContainer.innerHTML = `<small style="font-size: 11px">Time up!</small>`;
                    onTimeout(current_question_number);
                }
                progressValue--;
            }
        }, 1000);
    }
    useEffect(() => {
        startTimer();
    }, []);

    return (
        <div className="progress-container">
            <div className="value-container">
            </div>
        </div>
    );
}

export default Counter;
