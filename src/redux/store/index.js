import { combineReducers, createStore  } from "redux";
import { quizReducer } from "../reducers";

const reducer = combineReducers({
  quiz: quizReducer
});
const initialState = {};
const store = createStore (reducer, initialState);

export default store;
