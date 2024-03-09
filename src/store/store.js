import { createStore } from "redux";
import loginpageReducer from "./reducers/loginpage";
var store = createStore(loginpageReducer)
export default store