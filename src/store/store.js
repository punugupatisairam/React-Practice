
import todoReducer from "./reducers/todolist";
import { createStore } from 'redux';

var store = createStore(todoReducer);

export default store;

