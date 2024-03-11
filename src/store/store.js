import loginpageReducer from "./reducers/loginpage";
import productsReducer from "./reducers/products";
import { combineReducers,createStore } from "redux";
var reducers = combineReducers({loginpage:loginpageReducer,prod:productsReducer,})
var store = createStore(reducers)
export default store