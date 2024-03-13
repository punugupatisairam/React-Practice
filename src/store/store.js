import { createStore, combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
  counter: counterReducer,
  todolist: todoReducer
});

const store = createStore(reducers);

export default store; 
