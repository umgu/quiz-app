import { LOAD_QUESTION, SAVE_AND_NEXT_QUESTION, SKIP_QUESTION, SAVE_AND_SUBMIT } from "../action-types";

const initialState = {
    questionList: [],
    current_question_number: 0,
    total_question_number: 0
}

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SKIP_QUESTION:
            state.questionList[state.current_question_number - 1].answer = "";
            return {
                ...state,
                current_question_number: state.current_question_number + 1
            }
        case SAVE_AND_NEXT_QUESTION:
            state.questionList[state.current_question_number - 1].answer = action.answer;
            return {
                ...state,
                current_question_number: state.current_question_number + 1
            }
        case SAVE_AND_SUBMIT:
            state.questionList[state.current_question_number - 1].answer = action.answer;
            console.log(state);
            return {
                ...state,
            }
            
        case LOAD_QUESTION:
            return {
                ...state,
                questionList: action.data,
                current_question_number: 1,
                total_question_number: action.data.length
            }
        default:
            return state;
    }
}