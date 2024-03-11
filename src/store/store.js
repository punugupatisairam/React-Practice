import counterReducder from "./reducers/counter";
import todoReducer from "./reducers/todolist";
import newproductsReducer from "./reducers/newproducts";
import { createStore,combineReducers } from "redux";
// import { createStore } from "redux";
var reducers = combineReducers({counter:counterReducder,todolist:todoReducer,newproducts:newproductsReducer})
var store = createStore(reducers)
export default store