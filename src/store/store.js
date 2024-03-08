import { createStore } from "redux";

import regReducer from "./reducers/RegistrationForm";
var store = createStore (regReducer)
export default store 