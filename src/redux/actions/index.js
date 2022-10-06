import { LOAD_QUESTION, SAVE_AND_NEXT_QUESTION, SKIP_QUESTION, SAVE_AND_SUBMIT } from "../action-types"

export const skipQuestion = () => {
    return {type: SKIP_QUESTION}
}

export const saveAndNextQuestion = (question, answer) => {
    return {type: SAVE_AND_NEXT_QUESTION, answer}
}

export const loadQuestion = (data) => {
    return {
        type: LOAD_QUESTION,
        data
    }
}

export const saveAndSubmit = (question, answer) => {
    return {type: SAVE_AND_SUBMIT, answer}
}

